import { Pagination, Stack } from "@mui/material";
import { ContactComponent } from "./contact/contact.component";
import { Contact } from "./contact/contact.interface";

type ContactListProps = {
  contacts: Contact[];
  onUpdateHandler: Function;
  ondeleteHandler: Function;
  currentPage: number;
  totalPages: number;
};

export const ContactListComponent = ({
  contacts,
  onUpdateHandler,
  ondeleteHandler,
  currentPage,
  totalPages,
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
    <Stack spacing={2}>
      {totalPages > 0 ? (
        <Pagination count={totalPages} shape="rounded" color="primary" />
      ) : null}
    </Stack>
  </div>
);
