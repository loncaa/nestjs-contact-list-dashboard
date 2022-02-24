import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  avatarBase: {
    height: '100%',
    boxSizing: 'border-box',
    border: '3px solid rgba(187,196,195,0.3)',
    backgroundColor: 'rgba(45,161,173,0.4)',
    borderRadius: '50%'
  }
});

const Avatar = (props) => {
  const classes = useStyles();

  const rootStyle = {
    width: props.width ? `${props.width}px` : '100%',
    margin: props.margin ? props.margin : 'unset'
  }

  const avatarStyle = {
    height: props.height ? `${props.height}px` : '100%',
    width: props.width ? `${props.width}px` : '100%',
  }

  return (
    <div style={rootStyle}>
      {props.src ?
        <img src={props.src} alt={props.name} onClick={props.onClick} className={classes.avatarBase} style={avatarStyle} /> :
        <div className={classes.avatarBase} style={avatarStyle} onClick={props.onClick} />
      }
    </div>
  );
};

export default Avatar;