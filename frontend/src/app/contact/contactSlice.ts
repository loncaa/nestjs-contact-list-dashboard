import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ContactItem } from "../../components/contact/types";
import { RootState, AppThunk } from "../store";

export interface ContactState {
  filtered: ContactItem[];
  list: ContactItem[] | null;
  favorites: ContactItem[];
  selectedContact: ContactItem | null;
}

const initialState: ContactState = {
  filtered: [],
  list: null,
  favorites: [],
  selectedContact: null,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    selectContact: (state, action): void => {
      state.selectedContact = action.payload;
    },
    loadContacts: (state, action): void => {
      const { contacts, favorites } = action.payload;

      state.list = contacts;
      state.favorites = favorites;
    },
    removeContact: (state, action): void => {
      const contactId = action.payload;

      if (state.list && state.list[contactId]) {
        delete state.list[contactId];
      }

      if (state.favorites[contactId]) {
        delete state.favorites[contactId];
      }

      if (state.selectedContact && state.selectedContact.id === contactId) {
        state.selectedContact = null;
      }
    },
    saveContact: (state, action): void => {
      const data = action.payload;
      const { id: contactId } = action.payload;
      if (state.list && state.list[contactId]) {
        state.list[contactId] = data;
      }

      if (state.favorites[contactId]) {
        state.favorites[contactId] = data;
      }

      if (state.selectedContact && state.selectedContact.id === contactId) {
        state.selectedContact = data;
      }

      if (state.list && !state.list[contactId]) {
        state.list[contactId] = data;
      }
    },
  },
});

export const { selectContact, loadContacts, removeContact, saveContact } =
  contactSlice.actions;
export default contactSlice.reducer;
