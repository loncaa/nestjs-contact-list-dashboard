import { Injectable } from '@nestjs/common';
import { ContactRepository } from './contact.repository';
import { CreateContactDTO } from './dto/contact.dto';
import {
  Contact,
  ContactsResponseObject,
  InitialDataResponseObject,
} from './interfaces/contact.interface';

@Injectable()
export class ContactService {
  constructor(private readonly contactRepository: ContactRepository) { }

  getContacts(first: number, offset: number): ContactsResponseObject {
    const response = this.contactRepository.getAllContacts(first, offset);
    return response;
  }

  getInitialData(): InitialDataResponseObject {
    const response = this.contactRepository.getInitialData();
    return response;
  }

  getFavoriteContacts(first: number, offset: number): ContactsResponseObject {
    const response = this.contactRepository.getAllFavoriteContacts(first, offset);
    return response;
  }

  getContactById(id: string): Contact {
    const contact = this.contactRepository.getContact(id);
    return contact;
  }

  createContact(createContact: CreateContactDTO): Contact {
    const contact = this.contactRepository.storeContact(createContact);
    return contact;
  }

  updateContact(id: string, updateContact: CreateContactDTO): Contact {
    const contact = this.contactRepository.updateContact(id, updateContact);
    return contact;
  }

  deleteContact(id: string): Contact {
    const contact = this.contactRepository.deleteContact(id);
    return contact;
  }

  addFavoriteContact(id: string): Contact {
    const contact = this.contactRepository.addContactToFavorites(id);
    return contact;
  }

  deleteFavoriteContact(id: string): Contact {
    const contact = this.contactRepository.removeContactFromFavorites(id);
    return contact;
  }
}
