import * as React from "react";
import Button from "@mui/material/Button";
import { Contact } from "../contact/contact.type";
import { Alert, Snackbar } from "@mui/material";
import FormDialog from "../dialogs/formDialog.component";

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
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClickClose = () => {
    setOpenDialog(false);
  };

  const handleOpenSnackbar = (message: string, value: boolean) => {
    setOpenSnackbar(value);
    setSnackbarMessage(message);
  };

  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        {actionName}
      </Button>
      <FormDialog
        open={openDialog}
        closeDialogHandler={handleClickClose}
        contact={contact}
        actionName={actionName}
        openSnackbarHandler={(message: string) =>
          handleOpenSnackbar(message, true)
        }
        functionHandler={functionHandler}
        actionButtonLabel={actionButtonLabel}
      />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="error">{snackbarMessage}</Alert>
      </Snackbar>
    </div>
  );
}
