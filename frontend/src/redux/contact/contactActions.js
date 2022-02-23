import { createAction } from '../actionHelper';
import { actionTypes } from './contactActionTypes';

//TODO adapt backend
function loadContacts(contacts) {
  return createAction(actionTypes.LOAD_CONTACTS, { contacts });
}

function selectContact(contact) {
  return createAction(actionTypes.SELECT_CONTACT, { contact: contact });
}

function searchByFullName(fullName, favorites) {
  return createAction(actionTypes.SEARCH_CONTACT, { fullName, favorites });
}

function cancelSearching() {
  return createAction(actionTypes.CANCEL_SEARCH_CONTACT, {});
}

function saveContact(contact) {
  return createAction(actionTypes.SAVE_CONTACT, contact);
}

function removeContact(contactId) {
  return createAction(actionTypes.REMOVE_CONTACT, { id: contactId });
}

function addToFavorites(contactId) {
  return createAction(actionTypes.ADD_TO_FAVORITES, { id: contactId });
}

function removeFromFavorites(contactId) {
  return createAction(actionTypes.REMOVE_FROM_FAVORITES, { id: contactId });
}

export {
  loadContacts,

  saveContact,
  removeContact,
  addToFavorites,
  removeFromFavorites,

  searchByFullName,
  cancelSearching,
  selectContact
}