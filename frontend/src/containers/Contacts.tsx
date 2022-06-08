import { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";

import * as ContactApiService from "../service/contactAPIService";

import Contact from "../components/contact";
import GridItem from "../components/contact/GridItem";

import { useAppDispatch } from "../app/hooks";
import {
  addToFavorites,
  removeFromFavorites,
} from "../app/contact/contactUiSlice";
import { selectContact, removeContact } from "../app/contact/contactSlice";

import { ContactItem } from "../components/contact/types";

const ContactsContainer: FunctionComponent<any> = (props) => {
  const dispatch = useAppDispatch();

  const addToFavoritesHandler = (contactId: string) => {
    ContactApiService.addToFavorites(contactId);
    dispatch(addToFavorites(contactId));
  };

  const removeFromFavoritesHandler = (contactId: string) => {
    ContactApiService.removeFromFavorites(contactId);
    dispatch(removeFromFavorites(contactId));
  };

  const removeContactHandler = (contactId: string) => {
    ContactApiService.deleteContact(contactId).then(() =>
      dispatch(removeContact(contactId))
    );
  };

  const selectContactHandler = (profile: ContactItem) => {
    dispatch(selectContact(profile));
  };

  const ids = props.list ? Object.keys(props.list) : [];

  return (
    <Grid container>
      {!props.showFavorites ? (
        <Grid key={0} container item xs={12} sm={4} md={3}>
          <GridItem handleAddNewContact={() => selectContact(null)} />
        </Grid>
      ) : null}
      {ids.map((id) => {
        const item = props.list[id];

        return (
          <Grid key={item.id} container item xs={12} sm={4} md={3}>
            <Contact
              item={item}
              handleRemoveContact={removeContactHandler}
              handleAddToFavorites={addToFavoritesHandler}
              handleRemoveFromFavorites={removeFromFavoritesHandler}
              handleSelectContact={selectContactHandler}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ContactsContainer;
