import { useState } from "react";
import { data } from "../../../data";
import { individual } from "../../../model";

const UseStateArray = () => {
  const [people, setPeople] = useState<individual[]>(data);

  const removeItem = (id: number) => {
    setPeople(people.filter((item) => item.id !== id));
  };
  return (
    <>
      {people.map((person) => (
        <div key={person.id} className="item">
          <h4>{person.name}</h4>
          <button className="btn" onClick={() => removeItem(person.id)}>
            remove
          </button>
        </div>
      ))}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
