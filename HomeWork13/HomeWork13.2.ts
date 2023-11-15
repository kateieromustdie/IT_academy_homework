// интерфейс для ролей User и Admin
interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin extends User {
  role: string;
}

// интерфейс Person, соответствующего массиву persons
type Person = User | Admin;

// данные о персонах
const persons: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  }
];
