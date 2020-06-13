import React, { useState, useEffect } from "react";
import User from "./User";
import GetButton from "./GetButton";

export default function Main() {
  // create states
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isfetched, setIsfetched] = useState(false);

  // API url
  const apiUrl = "https://randomuser.me/api/?results=5";

  // fetch data from API
  useEffect(() => {
    const getUsers = () => {
      setIsLoading(true);
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          setUsers(data.results);
          setError("");
        })
        .catch((error) => {
          setIsLoading(false);
          setUsers([]);
          setError("Something Wrong!!, ", error);
        });
    };
    getUsers();
  }, [isfetched]);

  // handel click from get button
  const handleClick = () => {
    setIsfetched(!isfetched);
  };

  return (
    <div>
      <GetButton onClick={handleClick} />

      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      {isLoading && <h3 style={{ color: "green" }}>Loading...</h3>}
      <select name="select1">
        {!isLoading &&
          !error &&
          users.map((user, index) => (
            <option
              onSelect={() => setSelectedUser(user)}
              key={index}
              value={user.name.first}
            >
              {user.name.first} {user.name.last}
            </option>
          ))}
        {selectedUser.name.title && <User info={selectedUser} />}
      </select>
    </div>
  );
}
