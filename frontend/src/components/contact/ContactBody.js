import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "../profile/avatar";
import { ROUTES } from "../../constants";

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

const ContactBody = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const { fullName, profilePicture } = props;

  const goToProfile = () => {
    props.handleSelectContact();
    history.push(ROUTES.profile);
  };

  return (
    <div className={classes.container} onClick={goToProfile}>
      <Avatar
        margin="auto"
        width={60}
        height={60}
        alt={fullName}
        src={profilePicture}
        onClick={goToProfile}
      />
      <div className={classes.label}>{fullName}</div>
    </div>
  );
};

export default ContactBody;
