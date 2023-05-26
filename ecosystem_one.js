const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const randomWords = require('random-words')
const Tweakpane = require('tweakpane')
const settings = {
  dimensions: [ 2048, 2048 ],
  animate: true,
  fps: 30
};

let seconds = 0
let previousSeconds = 0;

const params = {
  population: 300,
  radius: 8,
}

const updateTime = (frame) => {
  if (frame % 30 === 0) {
    seconds += 1
  }
  return true;
}



const sketch = ({context, width, height}) => {

  const organismsArr = [];
  const organisms = populate(organismsArr, params.population, width, height)
  return ({ context, width, height, frame }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    updateTime(frame);

    organisms.forEach(bebe => {
      bebe.update();
      if (bebe instanceof Carnivore) {
        bebe.draw(context, 'carnivore');
        bebe.getHungry()

      } else if (bebe instanceof Herbivore) {
        bebe.draw(context, 'herbivore')
        bebe.getHungry()
      } else if (bebe instanceof Flora) {
        bebe.draw(context, 'flora')
      } else {
        bebe.draw(context);
      }
      bebe.bounce(width, height);
    })
  };

};

function populate (organisms, population, width, height) {
  let fauna = (population / 3);
  let flora = (population / 3)  * 2;
  for (let i = 0; i < (Math.floor(fauna * 0.7)); i++) {
    let name = randomName()
    let x = randomWidth(width)
    let y = randomHeight(height);
    let vel = randomVector(width, height);
    let sex = randomSex();

    organisms.push(new Herbivore(name, x, y, vel, sex));
  }

  for (let i = 0; i < (Math.floor(fauna * 0.3)); i++) {
    let name = randomName()

    let x = randomWidth(width)
    let y = randomHeight(height);
    let vel = randomVector(width, height);
    let sex = randomSex();

    organisms.push(new Carnivore(name, x, y, vel, sex));
  }
  
  for (let i = 0; i < flora; i++) {
    let name = randomName()
    let x = randomWidth(width)
    let y = randomHeight(height);

    organisms.push(new Flora(name, x, y));
  }

  return organisms
}

const createPane = () => {
  const pane = new Tweakpane.Pane();
  let folder;

  folder = pane.addFolder({ title: 'Ecosystem One :)' });
}

createPane();

// canvas util

function randomWidth (width) {
  return random.range(0, width);
}

function randomHeight (height) {
  return random.range(0, height);
}

function randomVector (width, height) {
  const x = randomWidth(width)
  const y = randomHeight(height);
  return new Vector(x, y)
}

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

  draw(context, type = 'general') {
    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.lineWidth = 1;
    context.beginPath();
    if (type === 'general') {
      context.arc(0, 0, params.radius, 0, Math.PI * 2);
      context.fill();
    } else if (type === 'carnivore') {
      context.rect(0, 0, params.radius + 20, params.radius);
      context.fillStyle = 'red'
      context.fill();
    } else if (type === 'herbivore') {
      context.arc(0, 0, params.radius, 0, Math.PI * 2);
      context.fillStyle = '#90ee90'
      context.fill();
    } else if (type === 'flora') {
      context.rect(0, 0, params.radius - 3, params.radius - 3);
      context.fillStyle = '#006400'
      context.fill();
    }
    
    context.stroke();
    context.restore();
  }
}

function randomSex () {
  let coin = Math.floor(Math.random * (2))
  if (coin < 0.5) {
      return 'M'
    } else {
      return 'F'
    };
  }

class Fauna extends Organism {
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

const randomName = () => {
  return randomWords({exactly: 1})
}

class Herbivore extends Fauna {
  constructor(name, x, y, sex) {
    super(x, y, sex)
    this.name = name;
  }
}

class Carnivore extends Fauna {
  constructor(name, x, y, sex) {
    super(x, y, sex)
    this.name = name;
  }
}

class Flora extends Organism {
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

class Funga extends Organism {
  constructor(name) {
    super(pos);
    this.vel = new Vector(0, 0);
    this.name = name;
  }
}


canvasSketch(sketch, settings);
