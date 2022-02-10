import { randomUUID } from 'crypto';
import {
  Contact,
  ContactsResponseObject,
  ContactDatabaseEntry,
} from './interfaces/contact.interface';

import { Injectable } from '@nestjs/common';
import { CreateContactDTO } from 'src/contact/dto/contact.dto';

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
}
