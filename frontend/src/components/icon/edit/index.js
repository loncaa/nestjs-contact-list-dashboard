import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Edit from './edit.svg';

const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
    display: 'inline-block'
  },
  icon: {
    height: '16px',
    width: '16px',
  },
});

const Index = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={props.style}>
      <img src={Edit} className={classes.icon}  alt="EditIcon" onClick={props.handleEditContact}/>
    </div>
  )
}

export default Index