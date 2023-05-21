const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');
const Tweakpane = require('tweakpane')
const settings = {
  dimensions: [ 2048, 2048 ]
};

const params = {
  population: 200,
  radius: 4,
}

const sketch = ({context, width, height}) => {

  const organismsArr = [];
  const organisms = populate(organismsArr, params.population, width, height)
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    organisms.forEach(bebe => {
      bebe.update();
      bebe.draw(context);
      bebe.bounce(width, height);
    })
  };

};

function populate (organisms, population, width, height) {
  for (let i = 0; i < population; i++) {
    const x = random.range(0, width);
    const y = random.range(0, height);

    organisms.push(new Organism(x, y));
  }

  return organisms
}

const createPane = () => {
  const pane = new Tweakpane.Pane();
  let folder;

  folder = pane.addFolder({ title: 'Ecosystem One :)' });
}

createPane();

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Organism {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
  }

  bounce(width, height) {
    if ((this.pos.x <= 0) || (this.pos.x >= width)) this.vel.x *= -1;
    if ((this.pos.y <= 0) || (this.pos.y >= height)) this.vel.y *= -1;
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(context) {
    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.lineWidth = 1;
    
    context.beginPath();
    context.arc(0, 0, params.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();

    context.restore();
  }
}

class Fauna extends Organism {
  constructor(vel) {
    super(pos);
    this.vel = vel;
  }
}

class Herbivore extends Fauna {
  constructor(name) {
    super(pos);
    super(vel);
    this.name = name;
  }
}

class Flora extends Organism {
  constructor(name) {
    super(pos);
    this.name = name;
  }
}

class Funga extends Organism {
  constructor(name) {
    super(pos);
    this.name = name;
  }
}
canvasSketch(sketch, settings);
