import React from 'react';
import ScreenSearch from './ScreenSearch';
import ContactsContainer from '../../containers/contacts';

import ScreenStyle from './screen.module.css';

const Index = (props) =>  {
    return(
      <div className={ScreenStyle.root}>
        <ScreenSearch
          handleSearchContact={props.handleSearchContact}
        />
        <ContactsContainer
          showFavorites={props.showFavorites}
          list={props.list}
        />
      </div>
    )
}

export default Index;