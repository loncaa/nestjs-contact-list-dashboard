import { ContactItemNumber } from "../components/contact/types";

export interface ContactPayload {
  name: string;
  email: string;
  numbers: ContactItemNumber[];
  profilePicture?: string | null | undefined;
  isFavorite: boolean;
}
