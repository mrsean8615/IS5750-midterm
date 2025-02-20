// Write the code for Question 1 here

const friends = [
  {
    firstName: "Joe",
    lastName: "Doe",
    birthDate: new Date("1990-02-01"),
    favoriteFoods: ["Pizza", "Burger"],
  },
  {
    firstName: "Randy",
    lastName: "Smith",
    birthDate: new Date("1995-02-01"),
    favoriteFoods: ["Pasta", "Donuts"],
  },
  {
    firstName: "Jane",
    lastName: "Ivy",
    birthDate: new Date("1997-02-01"),
    favoriteFoods: ["Chicken", "Rice"],
  },
];

const getAge = (birthDate) => {
  return new Date().getFullYear() - birthDate.getFullYear();
};

const logFriends = (friends) => {
  friends.forEach((friend) => {
    const age = getAge(friend.birthDate);
    console.log(
      `${friend.firstName} ${friend.lastName} is ${age} years old and enjoys the following foods: ${friend.favoriteFoods}`
    );
  });
};

logFriends(friends);

const getOldFriends = (date, friends) => {
  return friends.filter((friend) => friend.birthDate < date);
};

const oldFriends = getOldFriends(new Date("1995-01-01"), friends);
logFriends(oldFriends);
