const Vector = require('./vector');
const random = require('canvas-sketch-util/random');
const selfUtil = require('../self_util/self_util')
class Organism {
  constructor(x, y, params) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
    this.params = params;
  }

  bounce(width, height) {
    if ((this.pos.x <= 0) || (this.pos.x >= width)) this.vel.x *= -1;
    if ((this.pos.y <= 0) || (this.pos.y >= height)) this.vel.y *= -1;
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(context, type = 'general') {
    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.lineWidth = 1;
    context.beginPath();
    if (type === 'general') {
      context.arc(0, 0, this.params.radius, 0, Math.PI * 2);
      context.fill();
    } else if (type === 'carnivore') {
      context.rect(0, 0, this.params.radius + 20, this.params.radius);
      context.fillStyle = 'red'
      context.fill();
    } else if (type === 'herbivore') {
      context.arc(0, 0, this.params.radius, 0, Math.PI * 2);
      context.fillStyle = '#90ee90'
      context.fill();
    } else if (type === 'flora') {
      context.rect(0, 0, this.params.radius - 3, this.params.radius - 3);
      context.fillStyle = '#006400'
      context.fill();
    }
    
    context.stroke();
    context.restore();
  }
}

module.exports = Organism;