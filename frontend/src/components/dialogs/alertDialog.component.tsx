import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface AlertDialogProps {
  closeDialogHandler: Function;
  onSubmitHandler: Function;
  open: boolean;
}

export default function AlertDialog({
  closeDialogHandler,
  onSubmitHandler,
  open,
}: AlertDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={() => closeDialogHandler()}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Delete contact information?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          If you delete this contacts information it will be permanently deleted
          and wont be possible to undo this action. Are you sure that you want
          to delete this contact information?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => closeDialogHandler()}>
          Disagree
        </Button>
        <Button onClick={() => onSubmitHandler()} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
