import { FunctionComponent, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./app.css";
import { ROUTES } from "../constants";

import AppHeader from "../components/app/AppHeader";
import Screen from "./Screen";
import EditProfileContainer from "./EditProfile";
import Profile from "./Profile";
import Error from "../components/Error";

import * as ContactApiService from "../service/contactAPIService";

import { useAppDispatch } from "../app/hooks";
import { loadContacts } from "../app/contact/contactSlice";

const App: FunctionComponent<any> = (props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!props.list || props.list.length === 0) {
      ContactApiService.fetchInitialContactsData().then((data) =>
        dispatch(loadContacts(data))
      );
    }
  });

  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path={ROUTES.home} element={Screen} />
          <Route path={ROUTES.createProfile} element={EditProfileContainer} />
          <Route path={ROUTES.edit} element={EditProfileContainer} />
          <Route path={ROUTES.profile} element={Profile} />
          <Route element={Error} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
