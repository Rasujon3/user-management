import React, { useEffect, useState } from "react";
import User from "./User";
import UserModel from "./../types/models";

const Users = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [team, setTeam] = useState<UserModel[]>([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAdduser = (user: UserModel): void => {
    const newTeam = [...team, user];
    setTeam(newTeam);
  };
  return (
    <div>
      <h2>My Users: {users.length}</h2>
      <h3>Team size: {team.length}</h3>
      {/* <User name="Rohomot" age={55} addUser={handleAdduser} /> */}
      {users.map((user) => (
        <User user={user} addUser={handleAdduser} />
      ))}
    </div>
  );
};

export default Users;
