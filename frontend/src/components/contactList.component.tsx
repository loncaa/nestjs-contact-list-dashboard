import { Pagination, Stack } from "@mui/material";
import { ContactComponent } from "./contact/contact.component";
import { Contact } from "./contact/contact.interface";

type ContactListProps = {
  contacts: Contact[];
  onUpdateHandler: Function;
  onDeleteHandler: Function;
  changeContactsListPageHandler: any;
  totalPages: number;
  page: number;
};

export const ContactListComponent = ({
  contacts,
  onUpdateHandler,
  onDeleteHandler,
  changeContactsListPageHandler,
  totalPages,
  page,
}: ContactListProps) => (
  <div>
    {contacts.map((c) => (
      <ContactComponent
        key={c.id}
        {...c}
        onDelete={onDeleteHandler}
        onUpdate={onUpdateHandler}
      />
    ))}
    <Stack spacing={2}>
      {totalPages > 0 ? (
        <Pagination
          page={page}
          count={totalPages}
          shape="rounded"
          color="primary"
          onChange={changeContactsListPageHandler}
        />
      ) : null}
    </Stack>
  </div>
);
