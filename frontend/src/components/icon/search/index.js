import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Search from './search.svg';

const useStyles = makeStyles({
  icon: {
    position: 'absolute',
    paddingTop: '20px',
    paddingLeft: '23px',
    width: '18px'
  },
});

const Index = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <img src={Search} className={classes.icon}  alt="SearchIcon" style={props.style} />
    </React.Fragment>
  )
}

export default Index