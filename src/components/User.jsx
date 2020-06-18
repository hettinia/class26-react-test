import React from "react";

export default function User(props) {
  const userTitle = props.info.name.title;
  const userFirst = props.info.name.first;
  const userLast = props.info.name.last;
  const userPicture = props.info.picture.large;
  const userEmail = props.info.email;
  const userPhone = props.info.phone;
  const userState = props.info.location.state;
  const userCountry = props.info.location.country;

  return (
    <div className="user-box">
      <img className="user-img" src={userPicture} alt={userFirst}></img>
      <h2>
        {userTitle}. {userFirst} {userLast}
      </h2>
      <h3>{userEmail}</h3>
      <h3>{userPhone}</h3>
      <h3>
        {userState}, {userCountry}
      </h3>
    </div>
  );
}
