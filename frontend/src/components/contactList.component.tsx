import { ContactComponent } from "./contact/contact.component";
import { Contact } from "./contact/contact.interface";

type ContactListProps = {
  contacts: Contact[];
};

export const ContactListComponent = ({ contacts }: ContactListProps) => (
  <div>
    {contacts.map((c) => (
      <ContactComponent {...c} />
    ))}
  </div>
);
