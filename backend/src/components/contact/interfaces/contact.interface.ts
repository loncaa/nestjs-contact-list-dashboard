export interface Contact {
  id: string;
  readonly name: string;
  readonly email: string;
  readonly profilePicture: string;
  readonly isFavorite: boolean;
  readonly numbers: PhoneNumber[];
}

export class PhoneNumber {
  readonly type: string;
  readonly number: string;
}

export interface ContactDatabaseEntry {
  [key: string]: Contact;
}

export interface ContactsResponseObject {
  contacts: Contact[];
  count: number;
}
