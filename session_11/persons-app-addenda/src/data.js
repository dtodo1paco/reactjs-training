var faker = require('faker');

const generateAddress = () => {
  const address = {};
  address.streetName = faker.address.streetName();
  address.city = faker.address.city();
  address.zipCode = faker.address.zipCode();
  address.country = faker.address.country();
  return address;
}

const generatePerson = () => {
  const person = {};
  person.id = faker.random.uuid();
  person.name = faker.name.findName();
  person.email =  faker.internet.email();
  person.address = generateAddress();
  person.phoneNumber = faker.phone.phoneNumber();
  person.role = faker.lorem.word();
  return person;
}

const generatePersons = howMany => {
  const persons = [];
  for(var i = 0; i < howMany; i++) {
    persons.push(generatePerson());
  }
  return persons;
}
const persons = generatePersons(5);

module.exports = {
  persons
};