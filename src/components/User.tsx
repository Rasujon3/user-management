import React, { FC } from "react";

interface Props {
  name: string;
  age: number;
  addUser: () => void;
}

const User: FC<Props> = ({ name, age, addUser }) => {
  return (
    <div>
      <h2>
        Hello from : {name}, with experience {age}
      </h2>
      <button onClick={addUser}>Add Me</button>
    </div>
  );
};

export default User;
