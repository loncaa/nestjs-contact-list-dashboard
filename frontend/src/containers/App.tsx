import { FunctionComponent, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./app.css";
import { ROUTES } from "../constants";

import AppHeader from "../components/app/AppHeader";
import Screen from "./Screen";
import EditProfileContainer from "./EditProfile";
import Profile from "./Profile";
import Error from "../components/Error";

import * as ContactApiService from "../service/contactAPI.service";

const App: FunctionComponent<any> = (props) => {
  useEffect(() => {
    if (!props.list || props.list.length === 0) {
      ContactApiService.fetchInitialContactsData().then((data) =>
        props.actions.contact.loadInitialData(data)
      );
    }
  });

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
};

export default App;
