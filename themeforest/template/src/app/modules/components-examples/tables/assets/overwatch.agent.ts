export interface OverWatchAgent {
  position;
  firstName: string;
  lastName: string;
  username: string;
  status: string;
  age?;
  location?;
  date?;
  work?;
}
export const AGENTS_DATA: OverWatchAgent[] = [
  { position: 1, firstName: 'John', lastName: 'Morisson', username: '@Soldier76', status: 'Work' },
  { position: 2, firstName: 'Jesse', lastName: 'McCree', username: '@McCree', status: 'Vacation' },
  { position: 3, firstName: 'Jamison ', lastName: 'Fawkes ', username: '@Junkrat', status: 'Vacation' },
  { position: 4, firstName: 'Amélie ', lastName: 'Guillard', username: '@Widowmaker', status: 'Work' },
  { position: 5, firstName: 'Lena', lastName: 'Oxton', username: '@Traicer', status: 'Work' },
  { position: 6, firstName: 'Genji', lastName: 'Shimada', username: '@NorthDragon', status: 'Vacation' },
  { position: 7, firstName: 'Hanzo', lastName: 'Shimada', username: '@SouthDragon', status: 'Work' },
];

const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
  - start.getTime()))).toLocaleDateString();

export const AGENTS_DATA_RESPONSIVE: OverWatchAgent[] = [
  {
    position: 1,
    firstName: 'John ',
    lastName: 'Morisson',
    username: '@Soldier76',
    age: '57',
    location: 'Bloomington',
    status: 'In Progress',
    date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
    work: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))],
  },
  {
    position: 2,
    firstName: 'Jesse',
    lastName: 'McCree',
    username: '@McCree',
    age: '37',
    location: 'Santa Fe',
    status: 'Completed',
    date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
    work: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))],
  },
  {
    position: 3,
    firstName: 'Jamison ',
    lastName: 'Fawkes ',
    username: '@Junkrat',
    age: '25',
    location: 'Junkertown',
    status: 'Completed',
    date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
    work: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))],
  },
  {
    position: 4,
    firstName: 'Amélie ',
    lastName: 'Guillard',
    username: '@Widowmaker',
    age: '33',
    location: 'Annecy',
    status: 'In Progress',
    date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
    work: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))],
  },
  {
    position: 5,
    firstName: 'Lena',
    lastName: 'Oxton',
    username: '@Traicer',
    age: '26',
    location: 'London',
    status: 'In Progress',
    date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
    work: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))],
  },
  {
    position: 6,
    firstName: 'Genji',
    lastName: 'Shimada',
    username: '@NorthDragon',
    age: '35',
    location: 'Hanamura',
    status: 'Completed',
    date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
    work: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))],
  },
  {
    position: 7,
    firstName: 'Hanzo',
    lastName: 'Shimada',
    username: '@SouthDragon',
    age: '38',
    location: 'Hanamura',
    status: 'In Progress',
    date: getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
    work: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))],
  },
];

export interface AndroidVersions {
  name: string;
  calories?;
  fat?;
  carbs?;
  protein?;
}

let counter = 0;

function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return {
    id: counter, name, calories, fat, carbs, protein,
  };
}

export const VERSIONS_DATA: AndroidVersions[] = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];
