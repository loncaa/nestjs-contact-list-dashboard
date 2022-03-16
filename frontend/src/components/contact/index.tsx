import React from 'react';

import ContactDesktop from './ContactDesktop';
import ContactMobile from './ContactMobile';

const index = (props) => {
  const { id } = props.item;

  return (
    <React.Fragment>
      <ContactMobile
        item={props.item}
        handleRemoveContact={() => props.handleRemoveContact(id)}
        handleAddToFavorites={() => props.handleAddToFavorites(id)}
        handleRemoveFromFavorites={() => props.handleRemoveFromFavorites(id)}
        handleSelectContact={() => props.handleSelectContact(props.item)}
        />
      <ContactDesktop
        item={props.item}
        handleRemoveContact={() => props.handleRemoveContact(id)}
        handleAddToFavorites={() => props.handleAddToFavorites(id)}
        handleRemoveFromFavorites={() => props.handleRemoveFromFavorites(id)}
        handleSelectContact={() => props.handleSelectContact(props.item)}
      />
    </React.Fragment>
  );
};

export default index;