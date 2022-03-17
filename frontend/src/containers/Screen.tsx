import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import Screen from "../components/screen/Screen";
import ScreenSelector from "../components/screen/ScreenSelector";
import { SCREENS } from "../constants";

import { useAppDispatch } from "../app/hooks";
import { searchForContact } from "../app/contact/contactUiSlice";

const ScreenContainer: FunctionComponent<any> = (props) => {
  const dispatch = useAppDispatch();

  const [list, setList] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [searching, setSearching] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState(SCREENS.contacts);

  const prevProps = useRef<any>();

  useEffect(() => {
    if (!prevProps || !prevProps.current) {
      return;
    }

    const { list: newList, filtered: newFiltered } = props.contact;
    const { list, filtered } = prevProps.current.contact;

    if (filtered !== newFiltered) {
      setSearching(true);
    } else if (list !== newList) {
      setSearching(false);
    }

    setList(newList);
    prevProps.current = props;
  }, [props.contact]);

  useEffect(() => {
    prevProps.current = props;

    if (props.contact) {
      setList(props.contact.list);
      setSelectedScreen(SCREENS.contacts);
    }
  });

  const selectContacts = () => {
    setList(props.contact.list);
    setShowFavorites(false);
    setSelectedScreen(SCREENS.contacts);
  };

  const selectFavorites = () => {
    setList(props.contact.list);
    setShowFavorites(true);
    setSelectedScreen(SCREENS.contacts);
  };

  const searchContact = (name: string) => {
    dispatch(searchForContact({ name, type: showFavorites ? "F" : "L" }));
  };

  return (
    <React.Fragment>
      <ScreenSelector
        handleSelectContacts={selectContacts}
        handleSelectFavorites={selectFavorites}
        selectedScreen={selectedScreen}
      />
      <Screen
        handleSearchContact={searchContact}
        list={list}
        showFavorites={showFavorites}
      />
    </React.Fragment>
  );
};

export default ScreenContainer;
