import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import UploadIcon from '../../icon/upload';
import XksIcon from '../../icon/xks';

import EditProfileAvatarStyle from './editProfileAvatar.module.css'

const useStyles = makeStyles({
  avatarBase: {
    height: '100%',
    boxSizing: 'border-box',
    border: '3px solid rgba(187,196,195,0.3)',
    backgroundColor: 'rgba(45,161,173,0.4)',
    borderRadius: '50%'
  },
  transparentLayer: {
    zIndex: 1,
    margin: 'auto',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: 0,
    left: 0
  }
});

const EditProfileAvatar = (props) => {
  const classes = useStyles();

  const { src, name, handleRemovePictureAction, handleAddPictureAction } = props;

  const avatarStyle = {
    height: props.height ? `${props.height}px` : '100%',
    width: props.width ? `${props.width}px` : '100%',
  }

  return (
    <div className={EditProfileAvatarStyle.root}>
      {src ?
        <div>
          <div className={classes.transparentLayer} style={avatarStyle}>
            <XksIcon handleRemoveAction={handleRemovePictureAction} />
          </div>
          <img src={src} alt={name} className={classes.avatarBase} style={avatarStyle} />
        </div> :
        <div className={classes.avatarBase} style={avatarStyle}>
          <UploadIcon handleAction={handleAddPictureAction} />
        </div>
      }
    </div>
  );
};

export default EditProfileAvatar;