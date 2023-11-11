// builder
class Vegetable {
  constructor(name, calories) {
    this.name = name;
    this.calories = calories;
  }
}

class Salad {
  constructor() {
    this.vegetables = [];
  }

  addVegetable(vegetable) {
    this.vegetables.push(vegetable);
  }

  calculateCalories() {
    let totalCalories = 0;
    for (let vegetable of this.vegetables) {
      totalCalories += vegetable.calories;
    }
    return totalCalories;
  }

  sortVegetables(parameter) {
    this.vegetables.sort((a, b) => a[parameter] - b[parameter]);
  }

  findVegetablesInRange(minCalories, maxCalories) {
    return this.vegetables.filter(vegetable => vegetable.calories >= minCalories && vegetable.calories <= maxCalories);
  }
}

// decoraator
class VegetableDecorator {
  constructor(vegetable) {
    this.vegetable = vegetable;
  }

  get calories() {
    return this.vegetable.calories;
  }

  get name() {
    return this.vegetable.name;
  }
}

// Counting
const cucumber = new Vegetable('Cucumber', 16);
const tomato = new Vegetable('Tomato', 18);
const pepper = new Vegetable('Pepper', 40);

const salad = new Salad();
salad.addVegetable(new VegetableDecorator(cucumber));
salad.addVegetable(new VegetableDecorator(tomato));
salad.addVegetable(new VegetableDecorator(pepper));

console.log(salad.calculateCalories()); // 74

salad.sortVegetables('calories');
console.log(salad.vegetables); // [Pepper, Cucumber, Tomato]

console.log(salad.findVegetablesInRange(15, 20)); // [Tomato]
