import { createSlice } from "@reduxjs/toolkit";
import { ContactItem } from "../../components/contact/types";

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

export const contactUiSlice = createSlice({
  name: "uiContact",
  initialState,
  reducers: {
    addToFavorites: (state, action): void => {
      const contactId = action.payload;
      if (state.list) {
        let contact = state.list[contactId];

        if (contact) {
          contact.isFavorite = true;
          state.favorites[contactId] = contact;
        }
      }
    },
    removeFromFavorites: (state, action): void => {
      const contactId = action.payload;

      if (state.favorites[contactId]) {
        delete state.favorites[contactId];

        if (state.list && state.list[contactId]) {
          state.list[contactId].isFavorite = false;
        }
      }
    },
    searchForContact: (state, action): void => {
      const data = action.payload;
      const name = data.name;

      state.filtered = [];

      const list = data.type === "F" ? state.favorites : state.list || [];

      const keys = Object.keys(list);
      keys.forEach((k: any) => {
        if (state.list && state.list[k]) {
          const contactName = list[k].name.toLowerCase();
          const searchingFor = name.toLowerCase();
          if (contactName.startsWith(searchingFor)) {
            state.filtered.push(list[k]);
          }
        }
      });
    },
    cancelSearching: (state, action): void => {
      state.filtered = [];
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  searchForContact,
  cancelSearching,
} = contactUiSlice.actions;
export default contactUiSlice.reducer;
