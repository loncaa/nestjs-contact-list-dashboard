import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  layer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  root: {
    zIndex: "10",
    left: "0",
    top: "0",
    position: "fixed",
    width: "100vw",
    height: "100vh",
  },
  wrapper: {
    position: "relative",
    maxWidth: "480px",
    margin: "15% auto",
  },
  modal: {
    position: "relative",
    height: "240px",
    width: "100%",
    borderRadius: "4px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 0 14px 0 rgba(99,109,255,0.27)",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "60px",
    borderBottom: "1px solid #DCDCDC",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: 0,
    lineHeight: "19px",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    height: "100px",
    fontSize: "16px",
    letterSpacing: 0,
    lineHeight: "28px",
    textAlign: "center",
  },
  footer: {
    marginBottom: "31px",
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  button: {
    cursor: "pointer",
    border: "none",
    color: "#FFF",
    height: "42px",
    width: "160px",
    borderRadius: "28px",
    backgroundColor: "#2DA1AD",
    textAlign: "center",
  },
  text: {
    display: "block",
    margin: "auto",
    height: "30%",
    width: "85%",
  },
});

const Modal = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.layer} onClick={props.handleCloseAction} />
      <div className={classes.wrapper}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.text} style={{ textAlign: "left" }}>
              Delete
            </span>
          </div>
          <div className={classes.content}>
            <span className={classes.text}>
              Are you sure you want to delete this contact?
            </span>
          </div>
          <div className={classes.footer}>
            <button
              onClick={props.handleCloseAction}
              className={classes.button}
              style={{
                float: "left",
                marginLeft: "31px",
                backgroundColor: "#BBC4C3",
              }}
            >
              Cancel
            </button>
            <button
              onClick={props.handleDeleteAction}
              className={classes.button}
              style={{ float: "right", marginRight: "31px" }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
