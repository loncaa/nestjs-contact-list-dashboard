import { Injectable } from '@nestjs/common';
import { ContactRepository } from 'src/contact/contact.repository';
import { CreateContactDTO } from './dto/contact.dto';
import { Contact } from './interfaces/contact.interface';

@Injectable()
export class ContactService {
  constructor(private readonly contactRepository: ContactRepository) {}

  getContacts(): Contact[] {
    const contacts = this.contactRepository.getAllContacts();
    return contacts;
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
