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

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Maximilian",
  age: 30,
  nickname: "max",
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["coding"];

console.log(person.nickname);

for (const hobby of person.hobbies) console.log(hobby.toUpperCase());
