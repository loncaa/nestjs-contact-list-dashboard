import validator from "validator";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Contact } from "../contact/contact.type";
import { Alert, Snackbar } from "@mui/material";
import EmailField from "./validatedFormField.component";
import ValidatedFormField from "./validatedFormField.component";

interface ContactFormProps {
  contact?: Contact;
  functionHandler: Function;
  actionName: string;
  actionButtonLabel: string;
}

export default function ContactFormDialog({
  contact,
  functionHandler,
  actionName,
  actionButtonLabel,
}: ContactFormProps) {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  React.useEffect(() => {
    initializeContactForm();
  }, []);

  const initializeContactForm = () => {
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
    initializeContactForm();
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

    newContact["email"] = email;

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
    handleClose();
  };

  const handleChangeValue = (field: string) => (value: string) => {
    if (field == "email") {
      setEmail(value);
    } else if (field == "name") {
      setName(value);
    } else if (field == "phone") {
      setPhone(value);
    }
  };

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        {actionName}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{actionName} Form</DialogTitle>
        <DialogContent>
          <ValidatedFormField
            handleChangeValue={handleChangeValue("name")}
            defaultValue={name}
            helperText="Name is incorrect."
            label="Full name"
            required={true}
          />
        </DialogContent>
        <DialogContent>
          <EmailField
            validationMethod={validator.isMobilePhone}
            handleChangeValue={handleChangeValue("phone")}
            defaultValue={phone}
            helperText="Phone is incorrect."
            label="Phone"
          />
        </DialogContent>
        <DialogContent>
          <EmailField
            validationMethod={validator.isEmail}
            handleChangeValue={handleChangeValue("email")}
            defaultValue={email}
            helperText="Email is incorrect."
            label="Email"
            required={true}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={onSubmitHandler}>{actionButtonLabel}</Button>
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
