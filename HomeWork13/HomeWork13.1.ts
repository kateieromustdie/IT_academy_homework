// определение интерфеса пользователь
interface User {
  name: string;
  age: number;
  occupation: string;
  car?: string;
  children?: number;
}

// данные пользователей
const users: User[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
    car: 'VW'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    children: 2
  }
];

// использование интерфейса пользователь
for (const user of users) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Occupation: ${user.occupation}`);

  if (user.car) {
    console.log(`Car: ${user.car}`);
  }

  if (user.children) {
    console.log(`Children: ${user.children}`);
  }

  console.log('---');
}
