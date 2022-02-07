import { randomUUID } from 'crypto';
import { Contact } from './interfaces/contact.interface';

import { Injectable } from '@nestjs/common';
import { CreateContactDTO } from 'src/contact/dto/contact.dto';

interface DatabaseEntry {
  [key: string]: Contact;
}

@Injectable()
export class ContactRepository {
  database: DatabaseEntry;

  constructor() {
    this.database = {};
  }

  getAllContacts(): Contact[] {
    return Object.keys(this.database).map((k) => this.database[k]);
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
