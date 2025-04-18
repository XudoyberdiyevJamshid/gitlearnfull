class Burger {
  constructor() {
    this.size = "";
    this.cheese = false;
    this.spicy = false;
  }
}

class BurgerBuilder {
  constructor() {
    this.burger = new Burger();
  }

  setSize(size) {
    this.burger.size = size;
    return this;
  }

  addCheese() {
    this.burger.cheese = true;
    return this;
  }

  addSpicy() {
    this.burger.spicy = true;
    return this;
  }

  build() {
    return this.burger;
  }
}

const myBurger = new BurgerBuilder()
  .setSize("Large")
  .addCheese()
  .addSpicy()
  .build();
console.log(myBurger);
