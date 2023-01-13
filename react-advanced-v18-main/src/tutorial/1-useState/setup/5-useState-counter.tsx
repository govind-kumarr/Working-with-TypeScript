import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState<number>(0);
  return (
    <>
      {/* <section>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
      </section> */}
      <section>
        <h2>complex counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => {
            setTimeout(() => {
              setValue((prevValue) => prevValue + 1);
            }, 2000);
          }}
        >
          Increase Later
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button
          className="btn"
          onClick={() => {
            setTimeout(() => {
              setValue((prevValue) => prevValue - 1);
            }, 2000);
          }}
        >
          Decrease Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
