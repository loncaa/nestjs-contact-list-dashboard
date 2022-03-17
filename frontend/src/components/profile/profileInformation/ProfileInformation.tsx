import ProfileForm from "../ProfileForm";

import ProfileInformationStyle from "./profileInformation.module.css";
import ProfileHeaderDesktop from "../header/ProfileHeaderDesktop";

const ProfileInformation = (props: any) => {
  return (
    <div className={ProfileInformationStyle.root}>
      <ProfileHeaderDesktop
        handleAddToFavorites={props.handleAddToFavorites}
        handleRemoveFromFavorites={props.handleRemoveFromFavorites}
        handleBackToContacts={props.handleBackToContacts}
        handleEditContact={props.handleEditContact}
        isFavorite={props.isFavorite}
        name={props.name}
      />
      <div className={ProfileInformationStyle.border}>
        <div className={ProfileInformationStyle.form}>
          <ProfileForm email={props.email} numbers={props.numbers} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
