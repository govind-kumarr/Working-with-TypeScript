import { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState<string>("random title");
  const handleClick = () => {
    setText(text === "random title" ? "hello world!" : "random title");
  };

  return (
    <>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
