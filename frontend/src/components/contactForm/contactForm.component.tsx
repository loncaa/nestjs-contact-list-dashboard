import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Contact } from "../contact/contact.type";
import { Alert, Snackbar } from "@mui/material";

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
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
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
    let isValid = true;

    if (email) {
      newContact["email"] = email;
    }

    if (name) {
      newContact["name"] = name;
    } else {
      isValid = false;
    }

    if (phone) {
      newContact["phone"] = phone;
    } else {
      isValid = false;
    }

    if (!isValid) {
      setOpenSnackbar(true);
      return;
    }

    functionHandler(newContact);
  };

  const handleChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value = (event.target as HTMLInputElement).value;
    if (field == "email") {
      setEmail(value);
    } else if (field == "name") {
      setName(value);
    } else if (field == "phone") {
      setPhone(value);
    }
  };

  const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
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
            error={name ? false : true}
            defaultValue={name}
            autoFocus
            margin="dense"
            id="Name"
            label="Contact Name"
            type="text"
            fullWidth
            required
            variant="standard"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeValue(e, "name")
            }
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
            required
            error={phone ? false : true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeValue(e, "phone")
            }
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeValue(e, "email")
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={onSubmitHandler}>{componentAction}</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="error">Enter required fields!</Alert>
      </Snackbar>
    </div>
  );
}
