import React from 'react';

import HeartFull from './heart_full.svg';
import HeartEmpty from './heart_empty.svg';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
    display: 'inline-block'
  },
  icon: {
    height: '14px',
    width: '15px',
  }
});

const Index = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={props.style}>
    {
      props.isFavorite ?
        <img src={HeartFull} className={classes.icon} onClick={props.handleRemoveFromFavorites} alt="FavoritedHeartIcon" /> :
        <img src={HeartEmpty} className={classes.icon} onClick={props.handleAddToFavorites} alt="HeartIcon" />
    }
    </div>
  )
}

export default Index