const person = {
  name: "Maximilian",
  age: 30,
  nickname: "max",
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["coding"];

console.log(person.nickname);

for (const hobby of person.hobbies) console.log(hobby.toUpperCase());
