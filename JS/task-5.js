const person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  city: "New York",
};
function personInfo({ name, age, email, city }) {
  const contact = `${email}, ${city}`;
  const fullName = `${name}, ${age}`;
  return { contact, fullName };
}
console.log(personInfo(person));
