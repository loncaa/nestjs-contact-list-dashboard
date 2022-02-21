import React, {Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import './app.css';
import { ROUTES } from '../../constants'

import AppHeader from '../../components/app/AppHeader';
import Screen from '../screen';
import EditProfileContainer from '../editProfile';
import Profile from '../profile';
import Error from '../../components/Error'

class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppHeader/>
          <Switch>
            <Route path={ROUTES.home} component={Screen} exact/>
            <Route path={ROUTES.createProfile} component={EditProfileContainer}/>
            <Route path={ROUTES.edit} component={EditProfileContainer}/>
            <Route path={ROUTES.profile} component={Profile}/>
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Index;
