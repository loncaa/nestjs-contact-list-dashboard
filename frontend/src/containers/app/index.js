import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './app.css';
import { ROUTES } from '../../constants'

import AppHeader from '../../components/app/AppHeader';
import Screen from '../screen';
import EditProfileContainer from '../editProfile';
import Profile from '../profile';
import Error from '../../components/Error';

import * as ContactApiService from '../../service/contactAPI.service';
import * as contactActions from "../../redux/contact/contactActions";

class Index extends Component {
  componentDidMount() {
    if (!this.props.list || this.props.list.length === 0) {
      ContactApiService.fetchInitialContactsData().then(data => this.props.actions.contact.loadInitialData(data));
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppHeader />
          <Switch>
            <Route path={ROUTES.home} component={Screen} exact />
            <Route path={ROUTES.createProfile} component={EditProfileContainer} />
            <Route path={ROUTES.edit} component={EditProfileContainer} />
            <Route path={ROUTES.profile} component={Profile} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
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
