import { randomUUID } from 'crypto';
import {
  Contact,
  ContactsResponseObject,
  ContactDatabaseEntry,
} from './interfaces/contact.interface';

import { Injectable } from '@nestjs/common';
import { CreateContactDTO } from './dto/contact.dto';

@Injectable()
export class ContactRepository {
  database: ContactDatabaseEntry;

  constructor() {
    this.database = {};
  }

  getAllContacts(
    first: number = 0,
    offset: number = 3,
  ): ContactsResponseObject {
    const list = Object.keys(this.database);
    const count = list.length;
    const contacts = list.splice(first, offset).map((k) => this.database[k]);

    return {
      count,
      contacts,
    };
  }

  getAllFavoriteContacts(
    first: number = 0,
    offset: number = 3,
  ): ContactsResponseObject {
    const list = Object.keys(this.database);
    const favorites = list.reduce((acc, id) => {
      if (this.database[id].isFavorite) {
        acc.push(this.database[id]);
      }

      return acc;
    }, []);

    const count = list.length;
    const contacts = favorites.splice(first, offset);

    return {
      count,
      contacts,
    };
  }

  storeContact(contact: CreateContactDTO): Contact {
    const id = randomUUID();
    const response = { ...contact, id };

    this.database[id] = response;

    return response;
  }

  updateContact(id: string, contact: CreateContactDTO): Contact {
    const storedContact = this.getContact(id);
    if (!storedContact) {
      return null;
    }

    const updatedContact = { ...storedContact, ...contact };

    this.database[id] = updatedContact;

    return updatedContact;
  }

  getContact(id): Contact {
    return this.database[id];
  }

  deleteContact(id): Contact {
    const deletedContact = this.database[id];
    if (!deletedContact) {
      return null;
    }

    delete this.database[id];

    return deletedContact;
  }

  removeContactFromFavorites(id): Contact {
    const contact = this.database[id];
    if (!contact) {
      return null;
    }

    this.database[id] = { ...contact, isFavorite: false };

    return contact;
  }

  addContactToFavorites(id): Contact {
    const contact = this.database[id];
    if (!contact) {
      return null;
    }

    const newContact = { ...contact, isFavorite: true };

    this.database[id] = newContact;

    return contact;
  }
}
