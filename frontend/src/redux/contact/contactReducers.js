import {contacts, favorites} from '../../mockData'
import {actionTypes} from './contactActionTypes';

import { DEFAULT_CONTACT} from '../../service/contactService'


const initState = {
  filtered: [],
  list: contacts,
  favorites: favorites,
  selectedContact: DEFAULT_CONTACT
}

function contactReducers(state = initState, action){
  let newState = {...state}
  const data = {...action.data}

  switch (action.type) {
    case actionTypes.REMOVE_CONTACT:{
      const contactId = data.id;

      if(newState.list[contactId]){
        delete newState.list[contactId];
      }

      if(newState.favorites[contactId]){
        delete newState.favorites[contactId];
      }

      return newState;
    }
    case actionTypes.SAVE_CONTACT:{
      const contactId = data.id;

      if(newState.list[contactId]){
        newState.list[contactId] = data;
      }

      if(newState.favorites[contactId]){
        newState.favorites[contactId] = data;
      }

      if(newState.selectedContact && newState.selectedContact.id === contactId){
        newState.selectedContact = data;
      }

      if(!newState.list[contactId]){
        newState.list[contactId] = data;
      }

      return newState;
    }

    case actionTypes.ADD_TO_FAVORITES: {
      const contactId = data.id;
      let contact = newState.list[contactId];

      if(contact){

        contact.isFavorite = true;

        if(!newState.favorites[contactId]){
          newState.favorites[contactId] = contact;
        }
      }

      return newState;
    }
    case actionTypes.REMOVE_FROM_FAVORITES: {
      const contactId = data.id;

      if(newState.favorites[contactId]){
        delete newState.favorites[contactId];

        if(newState.list[contactId]){
          newState.list[contactId].isFavorite = false;
        }
      }
      return newState;
    }

    case actionTypes.SEARCH_CONTACT: {
      const fullName = data.fullName;
      const favorites = data.favorites;
      newState.filtered = [];

      const list = favorites ? newState.favorites : newState.list;

      const keys = Object.keys(list);
      keys.forEach(k => {
        if(newState.list[k]){
          const name = list[k].fullName.toLowerCase();
          const searchingFor = fullName.toLowerCase();
          if(name.startsWith(searchingFor)){
            newState.filtered.push(list[k]);
          }
        }
      })

      return newState;
    }
    case actionTypes.CANCEL_SEARCH_CONTACT: {
      newState.filtered = [];
      return newState;
    }
    case actionTypes.SELECT_CONTACT: {
      const contact = data.contact === undefined ? DEFAULT_CONTACT :  data.contact;

      return {...newState, selectedContact: contact};
    }
    default:
      return newState;
  }
}

export default contactReducers;