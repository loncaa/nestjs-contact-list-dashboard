import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import ContactFormDialog from "../contactForm/contactForm.component";
import AlertDialog from "../dialogs/alertDialog.component";
import React from "react";

interface ContactProps {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  onDelete: Function;
  onUpdate: Function;
}

export function ContactComponent({
  id,
  name,
  address,
  phone,
  email,
  onDelete,
  onUpdate,
}: ContactProps) {
  const [open, setOpen] = React.useState(false);

  const handleCloseDialog = () => setOpen(false);

  const handleOnDeleteContact = () => {
    setOpen(false);
    onDelete();
  };

  const contact = { id, address, name, email, phone };
  return (
    <div>
      <AlertDialog
        open={open}
        closeDialogHandler={handleCloseDialog}
        onSubmitHandler={handleOnDeleteContact}
      />

      <Card sx={{ minWidth: 275, margin: 1 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {email}
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2">{phone}</Typography>
        </CardContent>
        <CardActions>
          <ContactFormDialog
            contact={contact}
            functionHandler={onUpdate}
            actionName="Edit Contact"
            actionButtonLabel="Save"
          />
          <IconButton
            style={{ marginLeft: "auto" }}
            aria-label="delete"
            size="small"
            onClick={() => setOpen(true)}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
