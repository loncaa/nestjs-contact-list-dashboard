import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Contact } from "./contact/contact.type";

interface ContactFormProps {
  contact?: Contact;
  functionHandler: Function;
  componentAction: string;
}

export default function ContactFormDialog({
  contact,
  functionHandler,
  componentAction,
}: ContactFormProps) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  React.useEffect(() => {
    setContactForm();
  }, []);

  const setContactForm = () => {
    if (contact) {
      const { email, name, phone } = contact;
      if (email) {
        setEmail(email);
      }
      if (name) {
        setName(name);
      }
      if (phone) {
        setPhone(phone);
      }
    }
  };

  const handleClickOpen = () => {
    setContactForm();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEmail("");
    setName("");
    setPhone("");
  };

  const onSubmitHandler = () => {
    const newContact: any = {};

    if (email) {
      newContact["email"] = email;
    }

    if (name) {
      newContact["name"] = name;
    }

    if (phone) {
      newContact["phone"] = phone;
    }

    functionHandler(newContact);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = (event.target as HTMLInputElement).value;
    setEmail(email);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = (event.target as HTMLInputElement).value;
    setName(name);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const phone = (event.target as HTMLInputElement).value;
    setPhone(phone);
  };

  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        {componentAction} Contact
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{componentAction} Contact Form</DialogTitle>
        <DialogContent>
          <TextField
            defaultValue={name}
            autoFocus
            margin="dense"
            id="Name"
            label="Contact Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleNameChange}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            defaultValue={email}
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleEmailChange}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            defaultValue={phone}
            autoFocus
            margin="dense"
            id="phone"
            label="Phone"
            type="number"
            fullWidth
            variant="standard"
            onChange={handlePhoneChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={onSubmitHandler}>{componentAction}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
