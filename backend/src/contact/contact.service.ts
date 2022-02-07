import { Injectable } from '@nestjs/common';
import { ContactRepository } from 'src/contact/contact.repository';
import { CreateContactDTO } from './dto/contact.dto';
import {
  Contact,
  ContactsResponseObject,
} from './interfaces/contact.interface';

@Injectable()
export class ContactService {
  constructor(private readonly contactRepository: ContactRepository) {}

  getContacts(first: number, offset: number): ContactsResponseObject {
    const response = this.contactRepository.getAllContacts(first, offset);
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
}
