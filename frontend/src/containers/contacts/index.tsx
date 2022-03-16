import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

import * as ContactApiService from '../../service/contactAPI.service';
import * as contactActions from "../../redux/contact/contactActions";

import Contact from "../../components/contact";
import GridItem from "../../components/contact/GridItem";

class Index extends Component {
  addToFavorites = (contactId) => {
    ContactApiService.addToFavorites(contactId);
    this.props.actions.contact.addToFavorites(contactId);
  };

  removeFromFavorites = (contactId) => {
    ContactApiService.removeFromFavorites(contactId);
    this.props.actions.contact.removeFromFavorites(contactId);
  };

  removeContact = (contactId) => {
    ContactApiService.deleteContact(contactId).then(() =>
      this.props.actions.contact.removeContact(contactId));
  };

  selectContact = (profile) => {
    this.props.actions.contact.selectContact(profile);
  };

  render() {
    const ids = this.props.list ? Object.keys(this.props.list) : [];

    return (
      <Grid container>
        {!this.props.showFavorites ? (
          <Grid key={0} container item xs={12} sm={4} md={3}>
            <GridItem handleAddNewContact={() => this.selectContact(null)} />
          </Grid>
        ) : null}
        {ids.map((id) => {
          const item = this.props.list[id];

          return (
            <Grid key={item.id} container item xs={12} sm={4} md={3}>
              <Contact
                item={item}
                handleRemoveContact={this.removeContact}
                handleAddToFavorites={this.addToFavorites}
                handleRemoveFromFavorites={this.removeFromFavorites}
                handleSelectContact={this.selectContact}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      contact: bindActionCreators(contactActions, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
