import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as contactActions from '../../redux/contact/contactActions';

import Screen from '../../components/screen';
import ScreenSelector from '../../components/screen/ScreenSelector';
import { SCREENS } from '../../constants'

class Index extends Component {

  state = {
    list: [],
    showFavorites: false,
    selectedScreen: SCREENS.contacts
  }

  componentDidUpdate(prevProps) {
    const { list: newList, filtered: newFiltered } = this.props.contact
    const { list, filtered } = prevProps.contact;

    if (filtered !== newFiltered) {
      this.setState({ list: newFiltered, searching: true });
    } else if (list !== newList) {
      this.setState({ list: newList, searching: false });
    }
  }

  componentDidMount() {
    if (this.props.contact) {
      this.setState({ list: this.props.contact.list, selectedScreen: SCREENS.contacts })
    }
  }

  selectContacts = () => {
    this.setState({ list: this.props.contact.list, showFavorites: false, selectedScreen: SCREENS.contacts });
  }

  selectFavorites = () => {
    this.setState({ list: this.props.contact.favorites, showFavorites: true, selectedScreen: SCREENS.favorites });
  }

  searchContact = (name) => {
    this.props.actions.contact.searchByFullName(name, this.state.showFavorites);
  }

  render() {
    return (
      <React.Fragment>
        <ScreenSelector
          handleSelectContacts={this.selectContacts}
          handleSelectFavorites={this.selectFavorites}
          selectedScreen={this.state.selectedScreen}
        />
        <Screen
          handleSearchContact={this.searchContact}
          list={this.state.list}
          showFavorites={this.state.showFavorites}
        />
      </React.Fragment>
    )
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