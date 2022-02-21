import React, {useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Delete from './delete.svg';
import Modal from '../../modal';

const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
    display: 'inline-block'
  },
  icon: {
    height: '17px',
    width: '13px'
  },
});

const Index = (props) => {
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles();

  const removeActionInterceptor = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className={classes.root} style={props.style}>
      {
        showModal ?
        <Modal
          handleCloseAction={closeModal}
          handleDeleteAction={props.handleRemoveContact}
        /> : null
      }
      <img src={Delete} className={classes.icon}  alt="DeleteIcon" onClick={removeActionInterceptor}/>
    </div>
  )
}

export default Index