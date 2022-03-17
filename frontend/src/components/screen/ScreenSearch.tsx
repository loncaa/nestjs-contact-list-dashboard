import SearchIcon from "../icon/search";

import SceneSearchStyle from "./screen.module.css";

const ScreenSearch = (props: any) => {
  const handleChanges = (event: any) => {
    const {
      target: { value },
    } = event;

    props.handleSearchContact(value);
  };

  return (
    <div className={SceneSearchStyle.search}>
      <SearchIcon />
      <input type="text" name={"search"} onChange={handleChanges} />
    </div>
  );
};

export default ScreenSearch;
