import React, { useState } from "react";
import User from "./User";
import Button from "./Button";

export default function Main() {
  // create states
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [isSelectedUser, setIsSelectedUser] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // fetch data from API
  const getUsers = async () => {
    const apiUrl = "https://randomuser.me/api/?results=5"; // API url
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (response.status === 200) {
        const data = await response.json();
        setIsLoading(false);
        setUsers(data.results);
        setSelectedUser(data.results[0]);
        setIsSelectedUser(true);
        setError("");
      } else {
        throw error;
      }
    } catch (error) {
      setIsLoading(false);
      setUsers([]);
      setError("Something Wrong!!, ", error);
    }
  };

  // handel click from get button
  const handleClick = () => {
    getUsers();
  };

  return (
    <div className="main-container">
      <Button
        onClick={handleClick}
        className="get-btn"
        buttonTitle="Get Users!"
      />

      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      {isLoading && <h3 style={{ color: "green" }}>Loading...</h3>}
      <ul className="users-list">
        {!isLoading &&
          !error &&
          users.map((user, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedUser(user);
              }}
            >
              {user.name.first} {user.name.last}
            </li>
          ))}
      </ul>
      {console.log(selectedUser)}
      {users.length > 0 && isSelectedUser && <User info={selectedUser} />}
    </div>
  );
}
