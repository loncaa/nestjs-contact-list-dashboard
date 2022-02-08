import axios from "axios";
import { ContactDTO, Contact, ContactsRes } from "./contact.type";

export type ContactsResponseObject = {
  contacts: Contact[];
  totalPages: number;
};

const CONTACTS_OFFSET = 3;

async function fetchContacts(page: number): Promise<ContactsRes> {
  const first = (page - 1) * CONTACTS_OFFSET;
  const response = await axios.get(
    `/contact?first=${first}&offset=${CONTACTS_OFFSET}`
  );
  const { count, contacts } = response.data;
  const totalPages = Math.ceil(count / CONTACTS_OFFSET);
  
  return {
    contacts,
    totalPages,
  };
}

async function fetchContactById(id: string): Promise<Contact> {
  const response = await axios.get(`/contact/${id}`);
  return response.data;
}

async function createContact(
  createContactPayload: ContactDTO
): Promise<Contact> {
  const response = await axios.post(`/contact`, createContactPayload);
  return response.data;
}

async function updateContact(
  id: string,
  createContactPayload: ContactDTO
): Promise<Contact> {
  const response = await axios.put(`/contact/${id}`, createContactPayload);
  return response.data;
}
async function deleteContact(id: string): Promise<Contact> {
  const response = await axios.delete(`/contact/${id}`);
  return response.data;
}

export {
  fetchContacts,
  fetchContactById,
  createContact,
  updateContact,
  deleteContact,
};
