import { ContactItem, ContactItemNumber } from "../components/contact/types";
import { ContactPayload } from "./types";

export function createNumber(type: string, number: string): ContactItemNumber {
  return { type, number };
}

export function createContactProfilePayload(
  contact: ContactItem
): ContactPayload {
  const { name, profilePicture, isFavorite, email, numbers } = contact;
  return {
    name,
    profilePicture,
    email,
    isFavorite,
    numbers,
  };
}

export function createContactProfile(
  name: string,
  profilePicture: string | null,
  isFavorite: boolean,
  email: string,
  numbers: ContactItemNumber[]
): ContactItem {
  return {
    id: "id_" + Math.random(),
    name,
    profilePicture,
    email,
    isFavorite,
    numbers,
  };
}

export const DEFAULT_CONTACT = createContactProfile(
  "John Doe",
  "",
  true,
  "john.doe@gmail.doe",
  [createNumber("WORK", "+385445566")]
);
