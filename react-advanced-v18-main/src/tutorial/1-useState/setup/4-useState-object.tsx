import React, { useState } from "react";

type Person = {
  name: string;
  age: number;
  message: string;
};
const UseStateObject = () => {
  const [person, setPerson] = useState<Person>({
    name: "Peter",
    age: 24,
    message: "random message",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "Hello World!" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={() => changeMessage()}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
