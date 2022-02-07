import { ContactComponent } from "./contact/contact.component";
import { Contact } from "./contact/contact.interface";

type ContactListProps = {
  contacts: Contact[];
  onUpdateHandler: Function;
  ondeleteHandler: Function;
};

export const ContactListComponent = ({
  contacts,
  onUpdateHandler,
  ondeleteHandler,
}: ContactListProps) => (
  <div>
    {contacts.map((c) => (
      <ContactComponent
        key={c.id}
        {...c}
        ondelete={ondeleteHandler}
        onupdate={onUpdateHandler}
      />
    ))}
  </div>
);
