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
  favorites: ContactDatabaseEntry;

  constructor() {
    this.database = {};
    this.favorites = {};
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
    const list = Object.keys(this.favorites);
    const count = list.length;
    const contacts = list.splice(first, offset).map((k) => this.favorites[k]);

    return {
      count,
      contacts,
    };
  }

  storeContact(contact: CreateContactDTO): Contact {
    const id = randomUUID();
    const response = { ...contact, id };

    this.database[id] = response;

    if (contact.isFavorite) {
      this.favorites[id] = response;
    }

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
    const contact = this.favorites[id];
    if (!contact) {
      return null;
    }

    this.database[id] = { ...contact, isFavorite: false };
    delete this.favorites[id];

    return contact;
  }

  addContactToFavorites(id): Contact {
    const contact = this.database[id];
    if (!contact) {
      return null;
    }

    this.favorites[id] = contact;
    return contact;
  }
}
