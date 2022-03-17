import React, { FunctionComponent, useEffect, useState } from "react";
import * as ContactApiService from "../service/contactAPI.service";
import EditProfile from "../components/editProfile";

import * as ContactService from "../service/contact.factory";
import { handleValidation } from "../validators/contactFormValidation";
import EditProfileNotification from "../components/editProfile/EditProfileNotification";
import { ContactItem } from "../components/contact/types";

import { useAppDispatch } from "../app/hooks";
import { saveContact, removeContact } from "../app/contact/contactSlice";

const EditProfileContainer: FunctionComponent<any> = (props) => {
  const dispatch = useAppDispatch();

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [dirtyContact, setDirtyContact] = useState<ContactItem>();

  useEffect(() => {
    if (props.contact && props.contact.selectedContact) {
      //deep copy
      const stringify = JSON.stringify(props.contact.selectedContact);
      const newObject = JSON.parse(stringify);
      const dirtyContact = newObject;

      setDirtyContact(dirtyContact);
    } else if (props.contact.selectedContact === null) {
      const newContact = ContactService.createContactProfile(
        "Full name",
        null,
        false,
        "Email",
        [ContactService.createNumber("Cell", "Number")]
      );
      setDirtyContact(newContact);
    }
  });

  const onContactDataSaveHandler = () => {
    if (dirtyContact) {
      const validationResponse = handleValidation(dirtyContact);
      if (validationResponse.valid) {
        const payload =
          ContactService.createContactProfilePayload(dirtyContact);

        if (!dirtyContact.id) {
          ContactApiService.createContact(payload).then((contact) =>
            dispatch(saveContact(contact))
          );
        } else {
          ContactApiService.updateContact(dirtyContact.id, payload).then(
            (contact) => dispatch(saveContact(contact))
          );
        }

        setNotificationOpen(true);
      } else {
        alert(
          `Field ${validationResponse.field} not valid: ${validationResponse.message}`
        );
      }
    }
  };

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;

    if (dirtyContact) {
      const contact = { ...dirtyContact };

      //TODO somehow use keyof
      (contact as any)[name] = value;

      setDirtyContact(contact);
    }
  };

  const onNumbersChangeHandler = (e: any, i: number) => {
    const { name, value } = e.target;

    if (dirtyContact) {
      const contact = { ...dirtyContact };
      contact.numbers[i][name] = value;

      setDirtyContact(contact);
    }
  };

  const onNumberRemoveHandler = (i: number) => {
    if (dirtyContact) {
      const contact = { ...dirtyContact };

      contact.numbers.splice(i, 1);

      setDirtyContact(contact);
    }
  };

  const onNewNumberAddedHandler = () => {
    if (dirtyContact) {
      const contact = { ...dirtyContact };

      contact.numbers.push(ContactService.createNumber("", ""));

      setDirtyContact(contact);
    }
  };

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  const removeContactHandler = (contactId: string) => {
    dispatch(removeContact(contactId));
  };

  return (
    <React.Fragment>
      <EditProfileNotification
        message={"Contact data saved."}
        open={notificationOpen}
        handleOnClose={handleNotificationClose}
      />
      <EditProfile
        handleOnContactDataSave={onContactDataSaveHandler}
        handleRemoveContact={removeContactHandler}
        handleOnChange={onChangeHandler}
        handleOnNumbersChange={onNumbersChangeHandler}
        handleOnNumberRemove={onNumberRemoveHandler}
        handleOnNewNumberAdded={onNewNumberAddedHandler}
        dirty={dirtyContact}
      />
    </React.Fragment>
  );
};

export default EditProfileContainer;
