import { ContactItem, ContactItemNumber } from "../contact/types";

export interface EditProfileProps {
  dirty: ContactItem | undefined;
  handleOnContactDataSave: Function;
  handleOnChange: Function;
  handleOnNumbersChange: Function;
  handleOnNumberRemove: Function;
  handleOnNewNumberAdded: Function;
  handleRemoveContact: Function;
}

export interface EditProfileNotificationProps {
  open: boolean;
  message: string;
  handleOnClose: any; //TODO
}

export interface EditProfileHeaderProps {
  classes?: any;
  handleBackToContacts: Function;
  handleRemoveContact: Function;
}

export interface EditProfileInformationProps {
  contact: ContactItem | undefined;
  handleBackToContacts: Function;
  handleOnContactDataSave: Function;
  handleOnChange: Function;
  handleOnNumbersChange: Function;
  handleOnNumberRemove: Function;
  handleOnNewNumberAdded: Function;
  handleRemoveContact: Function;
}

export interface EditProfileFormProps {
  contact: ContactItem;
  handleOnContactDataSave: Function;
  handleOnNewNumberAdded: any;
  handleOnChange: Function;
  handleOnNumbersChange: Function;
  handleOnNumberRemove: Function;
}

export interface EditProfileFormNumbersProps {
  handleOnNumberRemove: Function;
  handleOnNumbersChange: Function;
  numbers: ContactItemNumber[];
}

export interface EditProfileAvatarProps {
  src: string | null | undefined;
  name: string;
  handleRemovePictureAction?: Function;
  handleAddPictureAction?: Function;
  height: number;
  width: number;
}
