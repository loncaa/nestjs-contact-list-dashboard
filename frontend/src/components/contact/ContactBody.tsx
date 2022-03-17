import { useNavigate } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "../profile/avatar";
import { ROUTES } from "../../constants";

import { ContactBodyProps } from "./types";

const useStyles = makeStyles({
  container: {
    width: "100%",
    position: "absolute",
    top: "26px",
  },
  label: {
    margin: "13px",
    fontSize: "18px",
    fontWeight: "bold",
    letterSpacing: 0,
    lineHeight: "22px",
    textAlign: "center",
  },
});

const ContactBody = (props: ContactBodyProps) => {
  const classes = useStyles();
  const history = useNavigate();

  const { name, profilePicture } = props;

  const goToProfile = () => {
    props.handleSelectContact();
    history(ROUTES.profile);
  };

  return (
    <div className={classes.container} onClick={goToProfile}>
      <Avatar
        margin="auto"
        width={60}
        height={60}
        alt={name}
        src={profilePicture}
        onClick={goToProfile}
      />
      <div className={classes.label}>{name}</div>
    </div>
  );
};

export default ContactBody;
