export type ContactDTO = {
  name: string;
  email: string;
  address: string;
  phone: string;
};

export type Contact = {
  id: string;
  readonly name: string;
  readonly email: string;
  readonly address: string;
  readonly phone: string;
};

export type ContactsRes = {
  contacts: Contact[];
  totalPages: number;
};
