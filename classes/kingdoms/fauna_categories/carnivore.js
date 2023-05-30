const Fauna = require('../fauna')
const lifeUtil = require('../../life_cycle/life_util')
class Carnivore extends Fauna {
  constructor(x, y, params, name) {
    super(x, y, params)
    this.name = name;
    this.apex = lifeUtil.isApex();
  }
}

module.exports = Carnivore;