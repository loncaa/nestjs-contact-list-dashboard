import axios from "axios";

const CONTACTS_OFFSET = 9;

import { ContactPayload } from "./types";

async function fetchInitialContactsData() {
  const response = await axios.get(`/contact/data`);
  const { data, favorites } = response.data;
  const totalPages = Math.ceil(data.count / CONTACTS_OFFSET);

  return {
    contacts: data.contacts,
    favorites: favorites.contacts,
    totalPages,
  };
}

async function fetchContacts(page: number) {
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

async function fetchContactById(id: string) {
  const response = await axios.get(`/contact/${id}`);
  return response.data;
}

async function createContact(createContactPayload: ContactPayload) {
  const response = await axios.post(`/contact`, createContactPayload);
  return response.data;
}

async function updateContact(id: string, createContactPayload: ContactPayload) {
  const response = await axios.put(`/contact/${id}`, createContactPayload);
  return response.data;
}
async function deleteContact(id: string) {
  const response = await axios.delete(`/contact/${id}`);
  return response.data;
}

async function addToFavorites(id: string) {
  const response = await axios.post(`/contact/favorite/${id}`);
  return response.data;
}

async function removeFromFavorites(id: string) {
  const response = await axios.delete(`/contact/favorite/${id}`);
  return response.data;
}

export {
  fetchInitialContactsData,
  fetchContacts,
  fetchContactById,
  createContact,
  updateContact,
  deleteContact,
  addToFavorites,
  removeFromFavorites,
};
