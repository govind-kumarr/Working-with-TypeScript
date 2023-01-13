import React from 'react';
import './App.css';

let name : any;
let age : number | string;
let isStudent: boolean;
let hobbies: string [];
let role: [string,number];
role = ["SDE",12];


type X = {
  a?: string,
  b?: number
}
interface Person extends X {
  name: string,
  age: number
  hobbies?: string[]
}

/*
type Y = X & {
  c: string,
  d: number
}

let newObject : Y =  {
  c: "string",
  d: 12,
  a: "String",
  b: 13
}
*/
let person: Person = {
  name: "Govind Kumar",
  age: 21,
};

let printName: (name:string) => void;

printName = function(name:string) {
  console.log(name)
}



function App() {
  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
