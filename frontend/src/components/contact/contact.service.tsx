import axios from "axios";
import { CreateContactDTO } from "./contact.dto";
import { Contact } from "./contact.interface";

async function fetchContacts(): Promise<Contact[]> {
  const response = await axios.get("/contact");
  return response.data;
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
