import { FunctionComponent } from "react";
import { Redirect } from "react-router-dom";

import { useAppDispatch } from "../app/hooks";
import {
  addToFavorites,
  removeFromFavorites,
} from "../app/contact/contactUiSlice";

import Profile from "../components/profile";

const ProfileContainer: FunctionComponent<any> = (props) => {
  const dispatch = useAppDispatch();

  const addToFavoritesHandler = (contactId: string) => {
    dispatch(addToFavorites(contactId));
  };

  const removeFromFavoritesHandler = (contactId: string) => {
    dispatch(removeFromFavorites(contactId));
  };

  return props.contact.selectedContact ? (
    <Profile
      handleAddToFavorites={addToFavoritesHandler}
      handleRemoveFromFavorites={removeFromFavoritesHandler}
      contact={props.contact.selectedContact}
    />
  ) : (
    <Redirect to="/" />
  );
};

export default ProfileContainer;
