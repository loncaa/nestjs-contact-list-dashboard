import Grid from "@material-ui/core/Grid";
import PhoneIcon from "../../icon/phone";
import { makeStyles } from "@material-ui/core/styles";

import ProfilePhoneNumbersStyle from "./profilePhoneNumbers.module.css";

const useStyles = makeStyles({
  label: {
    marginLeft: "15px",
    color: "#2DA1AD",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: 0,
    lineHeight: "19px",
  },
  text: {
    fontSize: "16px",
    letterSpacing: 0,
    lineHeight: "19px",
  },
  list: {
    "&:first-child": {
      marginTop: "33px",
    },
  },
});

const ProfilePhoneNumbers = (props: any) => {
  const classes = useStyles();

  return (
    <Grid container className={ProfilePhoneNumbersStyle.root}>
      <Grid key={`phone1`} container item xs={12} sm={3}>
        <PhoneIcon />
        <span className={classes.label}>numbers</span>
      </Grid>

      <Grid key={`phone2`} container item xs={12} sm={9}>
        {props.numbers.map((number, i) => {
          return (
            <Grid
              key={`number${i}`}
              container
              item
              xs={12}
              sm={12}
              className={ProfilePhoneNumbersStyle.phoneNumber}
            >
              <Grid container item xs={4} sm={3}>
                <span className={classes.text}>{number.type}</span>
              </Grid>
              <Grid container item xs={8} sm={9}>
                <span className={classes.text}>{number.number}</span>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ProfilePhoneNumbers;
