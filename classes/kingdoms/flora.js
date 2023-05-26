const organism = require('../organism')

export class Flora extends organism.ParentClass {
  constructor(name, x, y) {
    super(x, y);
    this.vel = new Vector(0, 0)
    this.name = name;
  }

  update() {
    this.pos.x;
    this.pos.y;
  }

}