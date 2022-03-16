import axios from "axios";

const CONTACTS_OFFSET = 9;

async function fetchInitialContactsData() {
  const response = await axios.get(
    `/contact/data`
  );
  const { data, favorites } = response.data;
  const totalPages = Math.ceil(data.count / CONTACTS_OFFSET);

  return {
    contacts: data.contacts,
    favorites: favorites.contacts,
    totalPages,
  };
}

async function fetchContacts(page) {
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

async function fetchContactById(id) {
  const response = await axios.get(`/contact/${id}`);
  return response.data;
}

async function createContact(
  createContactPayload
) {
  const response = await axios.post(`/contact`, createContactPayload);
  return response.data;
}

async function updateContact(
  id,
  createContactPayload
) {
  const response = await axios.put(`/contact/${id}`, createContactPayload);
  return response.data;
}
async function deleteContact(id) {
  const response = await axios.delete(`/contact/${id}`);
  return response.data;
}

async function addToFavorites(id) {
  const response = await axios.post(`/contact/favorite/${id}`);
  return response.data;
}

async function removeFromFavorites(id) {
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