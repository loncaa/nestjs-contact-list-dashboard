import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import * as contactActions from '../../redux/contact/contactActions';

import Profile from '../../components/profile'

class Index extends Component {
  addToFavorites = (contactId) => {
    this.props.actions.contact.addToFavorites(contactId);
  };

  removeFromFavorites = (contactId) => {
    this.props.actions.contact.removeFromFavorites(contactId);
  };

  render() {
    return this.props.contact.selectedContact ?
      <Profile
        handleAddToFavorites={this.addToFavorites}
        handleRemoveFromFavorites={this.removeFromFavorites}
        contact={this.props.contact.selectedContact}
      /> :
      <Redirect to="/" />
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      contact: bindActionCreators(contactActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);