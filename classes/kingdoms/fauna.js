const organism = require('../organism')

class Fauna extends organism.ParentClass {
  constructor(x, y) {
    super(x, y)
    this.sex = randomSex();
    this.hunger = 100;
  }

  getHungry () {
    if (updateTime()) {
      this.hunger -= 0.02
    }
  }
}

module.exports = {ParentClass: Fauna}