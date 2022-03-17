export interface ContactItemNumber {
  [key: string]: string;
}

export interface ContactItem {
  id: string;
  name: string;
  email: string;
  numbers: ContactItemNumber[];
  profilePicture?: string | null | undefined;
  isFavorite: boolean;
}

export interface ContactProps {
  item: ContactItem;
  handleRemoveContact: Function;
  handleAddToFavorites: Function;
  handleRemoveFromFavorites: Function;
  handleSelectContact: Function;
}

export interface ContactHeaderProps {
  isFavorite: boolean;
  isMouseEnter: boolean;
  handleSelectContact: Function;
  handleRemoveFromFavorites: Function;
  handleAddToFavorites: Function;
  handleRemoveContact: Function;
}

export interface ContactBodyProps {
  name: string;
  profilePicture: string;
  handleSelectContact: Function;
}

export interface ContactGridItemProps {
  handleAddNewContact: Function;
}
