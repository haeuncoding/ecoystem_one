const fauna = require('../fauna')

export class Carnivore extends fauna.ParentClass {
  constructor(name, x, y, sex) {
    super(x, y, sex)
    this.name = name;
  }
}