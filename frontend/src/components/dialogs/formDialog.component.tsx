import validator from "validator";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Contact } from "../contact/contact.type";
import ValidatedFormField from "../contactForm/validatedFormField.component";

interface FormDialogProps {
  open: boolean;
  closeDialogHandler: Function;
  contact?: Contact;
  functionHandler: Function;
  actionName: string;
  actionButtonLabel: string;
  openSnackbarHandler: Function;
}

export default function FormDialog({
  open,
  closeDialogHandler,
  contact,
  functionHandler,
  actionName,
  actionButtonLabel,
  openSnackbarHandler,
}: FormDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [isNameValid, setIsNameValid] = React.useState(true);
  const [isPhoneValid, setIsPhoneValid] = React.useState(true);

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

  const handleClose = () => {
    closeDialogHandler();
    setEmail("");
    setName("");
    setPhone("");
  };

  const onSubmitHandler = () => {
    if (!isEmailValid || !isNameValid || !isPhoneValid) {
      openSnackbarHandler("Please enter valid data.");
      return;
    }

    if (!name || !phone) {
      openSnackbarHandler("Please enter required fields!");
      return;
    }

    functionHandler({ email, name, phone });
    handleClose();
  };

  const handleChangeValue = (field: string) => (value: string) => {
    if (field === "email") {
      setEmail(value);
    } else if (field === "name") {
      setName(value);
    } else if (field === "phone") {
      setPhone(value);
    }
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle>{actionName} Form</DialogTitle>
      <DialogContent>
        <ValidatedFormField
          handleChangeValue={handleChangeValue("name")}
          defaultValue={name}
          helperText="Name is incorrect."
          label="Full name"
          required={true}
          setIsValidHandler={setIsNameValid}
        />
      </DialogContent>
      <DialogContent>
        <ValidatedFormField
          validationMethod={validator.isMobilePhone}
          handleChangeValue={handleChangeValue("phone")}
          defaultValue={phone}
          helperText="Phone is incorrect."
          label="Phone"
          required={true}
          setIsValidHandler={setIsPhoneValid}
        />
      </DialogContent>
      <DialogContent>
        <ValidatedFormField
          validationMethod={validator.isEmail}
          handleChangeValue={handleChangeValue("email")}
          defaultValue={email}
          helperText="Email is incorrect."
          label="Email"
          setIsValidHandler={setIsEmailValid}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={onSubmitHandler}>{actionButtonLabel}</Button>
      </DialogActions>
    </Dialog>
  );
}
