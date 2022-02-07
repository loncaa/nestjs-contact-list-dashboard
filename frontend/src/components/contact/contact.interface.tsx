export interface Contact {
  id: string;
  readonly name: string;
  readonly email: string;
  readonly address: string;
  readonly phone: string;
}

export interface ContactsResponseObject {
  contacts: Contact[];
  totalPages: number;
}
