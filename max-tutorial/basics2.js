"use strict";
/*
const person: {
  name: string;
  age: number;
  nickname: string;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  nickname: "max",
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
*/
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Maximilian",
    age: 30,
    nickname: "max",
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
let favoriteActivities;
favoriteActivities = ["coding"];
console.log(person.nickname);
for (const hobby of person.hobbies)
    console.log(hobby.toUpperCase());
