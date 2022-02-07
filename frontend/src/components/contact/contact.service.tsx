import axios from "axios";
import { CreateContactDTO } from "./contact.dto";
import { Contact, ContactsResponseObject } from "./contact.interface";

const CONTACTS_OFFSET = 3;

async function fetchContacts(page: number): Promise<ContactsResponseObject> {
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
  createContactPayload: CreateContactDTO
): Promise<Contact> {
  const response = await axios.post(`/contact`, createContactPayload);
  return response.data;
}

async function updateContact(
  id: string,
  createContactPayload: CreateContactDTO
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
