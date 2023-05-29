const Organism = require('../organism')
const selfUtil = require('../../self_util/self_util')
class Fauna extends Organism {
  constructor(x, y, params) {
    super(x, y, params)
    this.sex = selfUtil.randomSex();
    this.hunger = 100;
  }

  getHungry () {
    // if (updateTime()) {
  if (typeof('i') === 'string') {
    this.hunger -= 0.02
    }
  }
}

module.exports = Fauna