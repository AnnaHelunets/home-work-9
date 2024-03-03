const user = {
  name: "Anna",
  age: 25,
};
function getUserInfo({ name, age }) {
  return `Мене звати ${name} мені ${age} років`;
}
console.log(getUserInfo(user));
