var person = {
    name: "Maximilian",
    age: 30,
    nickname: "max",
    hobbies: ["Sports", "Cooking"]
};
var favoriteActivities;
favoriteActivities = ["coding"];
console.log(person.nickname);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
