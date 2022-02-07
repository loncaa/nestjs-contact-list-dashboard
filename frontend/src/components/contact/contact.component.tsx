import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

type ContactProps = {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  ondelete: Function;
  onupdate: Function;
};

export function ContactComponent({
  id,
  name,
  address,
  phone,
  email,
  ondelete,
  onupdate,
}: ContactProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {email}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {address}
        </Typography>
        <Typography variant="body2">{phone}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            console.log("upate");
          }}
        >
          Edit
        </Button>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => ondelete(id)}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
