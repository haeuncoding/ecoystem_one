const fauna = require('../fauna')

export class Herbivore extends fauna.ParentClass {
  constructor(name, x, y, sex) {
    super(x, y, sex)
    this.name = name;
  }
}