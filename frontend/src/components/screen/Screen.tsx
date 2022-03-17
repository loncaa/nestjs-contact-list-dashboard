import ScreenSearch from "./ScreenSearch";
import ContactsContainer from "../../containers/Contacts";

import ScreenStyle from "./screen.module.css";

const Screen = (props: any) => {
  return (
    <div className={ScreenStyle.root}>
      <ScreenSearch handleSearchContact={props.handleSearchContact} />
      <ContactsContainer
        showFavorites={props.showFavorites}
        list={props.list}
      />
    </div>
  );
};

export default Screen;
