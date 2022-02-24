import React, { Component } from 'react';
import * as ContactApiService from '../../service/contactAPI.service';
import EditProfile from '../../components/editProfile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contactActions from '../../redux/contact/contactActions';

import * as ContactService from '../../service/contactService'
import { handleValidation } from '../../validators/contactFormValidation';
import EditProfileNotification
  from '../../components/editProfile/EditProfileNotification';

class Index extends Component {
  state = {
    notificationOpen: false,
    dirtyContact: {}
  }

  componentDidMount() {
    if (this.props.contact && this.props.contact.selectedContact) {

      //deep copy
      const stringify = JSON.stringify(this.props.contact.selectedContact)
      const newObject = JSON.parse(stringify)
      const dirtyContact = newObject;

      this.setState({ dirtyContact: dirtyContact })
    } else if (this.props.contact.selectedContact === null) {
      const newContact = ContactService.createContactProfile('Full name', null, false, 'Email', [ContactService.createNumber('Cell', 'Number')]);
      this.setState({ dirtyContact: newContact })
    }
  }

  onContactDataSave = () => {
    if (this.state.dirtyContact) {
      const validationResponse = handleValidation(this.state.dirtyContact)
      if (validationResponse.valid) {
        const payload = ContactService.createContactProfilePayload(this.state.dirtyContact)

        if (!this.state.dirtyContact.id) {
          ContactApiService.createContact(payload).then(contact =>
            this.props.actions.contact.saveContact(contact));
        } else {
          ContactApiService.updateContact(this.state.dirtyContact.id, payload).then(contact =>
            this.props.actions.contact.saveContact(contact));
        }

        this.setState({ notificationOpen: true });
      } else {
        alert(`Field ${validationResponse.field} not valid: ${validationResponse.message}`);
      }
    }
  }

  onChange = (e) => {
    const { name, value } = e.target

    if (this.state.dirtyContact) {
      const contact = { ...this.state.dirtyContact }
      contact[name] = value;
      this.setState({ dirtyContact: contact })
    }
  }

  onNumbersChange = (e, i) => {
    const { name, value } = e.target

    if (this.state.dirtyContact) {
      const contact = { ...this.state.dirtyContact }
      contact.numbers[i][name] = value;
      this.setState({ dirtyContact: contact })
    }
  }

  onNumberRemove = (i) => {
    if (this.state.dirtyContact) {
      const contact = { ...this.state.dirtyContact }
      contact.numbers.splice(i, 1);
      this.setState({ dirtyContact: contact })
    }
  }

  onNewNumberAdded = () => {
    if (this.state.dirtyContact) {
      const contact = { ...this.state.dirtyContact }
      contact.numbers.push(ContactService.createNumber('', ''));
      this.setState({ dirtyContact: contact })
    }
  }

  handleNotificationClose = () => {
    this.setState({ notificationOpen: false });
  }

  render() {
    return (
      <React.Fragment>
        <EditProfileNotification
          message={'Contact data saved.'}
          open={this.state.notificationOpen}
          handleOnClose={this.handleNotificationClose}
        />
        <EditProfile
          handleOnContactDataSave={this.onContactDataSave}
          handleRemoveContact={this.props.actions.contact.removeContact}
          handleOnChange={this.onChange}
          handleOnNumbersChange={this.onNumbersChange}
          handleOnNumberRemove={this.onNumberRemove}
          hadnleOnNewNumberAdded={this.onNewNumberAdded}
          dirty={this.state.dirtyContact}
        />
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(
  Index);