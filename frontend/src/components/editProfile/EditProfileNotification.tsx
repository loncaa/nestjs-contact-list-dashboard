import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const EditProfileNotification = (props) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={props.open}
      autoHideDuration={2000}
      onClose={props.handleOnClose}
      message={props.message}
    />
  )
};

export default EditProfileNotification;