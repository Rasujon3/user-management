import React from "react";
import User from "./User";

const Users = () => {
  const handleAdduser = (): void => {};
  return (
    <div>
      <h2>My Users:</h2>
      <User name="Rohomot" age={55} addUser={handleAdduser} />
    </div>
  );
};

export default Users;
