const Organism = require('../organism')
const Vector = require('../vector')
export class Flora extends Organism {
  constructor(x, y, params, name) {
    super(x, y, params);
    this.name = name;
  }

  update() {
    this.pos.x;
    this.pos.y;
  }
}

module.exports = Flora;