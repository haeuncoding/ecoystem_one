const Fauna = require('../fauna')

class Carnivore extends Fauna {
  constructor(x, y, params, name) {
    super(x, y, params)
    this.name = name;
  }
}

module.exports = Carnivore;