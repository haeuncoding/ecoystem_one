const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const Tweakpane = require('./interface/tweakpane')
const population = require('./classes/population')
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



let pObj = new Tweakpane();
const pane = pObj.createPane()


const sketch = ({context, width, height}) => {
  console.log(pObj.params)
  const organisms = new population(context, params.population, width, height, pObj.params);
  organisms.populate();
  return ({ context, width, height, frame }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    updateTime(frame);

    organisms.update()
  };
};



// canvas util

// function randomWidth (width) {
//   return random.range(0, width);
// }

// function randomHeight (height) {
//   return random.range(0, height);
// }

// function randomVector (width, height) {
//   const x = randomWidth(width)
//   const y = randomHeight(height);
//   return new Vector(x, y)
// }

// class Vector {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// class Organism {
//   constructor(x, y) {
//     this.pos = new Vector(x, y);
//     this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
//   }

//   bounce(width, height) {
//     if ((this.pos.x <= 0) || (this.pos.x >= width)) this.vel.x *= -1;
//     if ((this.pos.y <= 0) || (this.pos.y >= height)) this.vel.y *= -1;
//   }

//   update() {
//     this.pos.x += this.vel.x;
//     this.pos.y += this.vel.y;
//   }

//   draw(context, type = 'general') {
//     context.save();
//     context.translate(this.pos.x, this.pos.y);
//     context.lineWidth = 1;
//     context.beginPath();
//     if (type === 'general') {
//       context.arc(0, 0, params.radius, 0, Math.PI * 2);
//       context.fill();
//     } else if (type === 'carnivore') {
//       context.rect(0, 0, params.radius + 20, params.radius);
//       context.fillStyle = 'red'
//       context.fill();
//     } else if (type === 'herbivore') {
//       context.arc(0, 0, params.radius, 0, Math.PI * 2);
//       context.fillStyle = '#90ee90'
//       context.fill();
//     } else if (type === 'flora') {
//       context.rect(0, 0, params.radius - 3, params.radius - 3);
//       context.fillStyle = '#006400'
//       context.fill();
//     }
    
//     context.stroke();
//     context.restore();
//   }
// }

// function randomSex () {
//   let coin = Math.floor(Math.random * (2))
//   if (coin < 0.5) {
//       return 'M'
//     } else {
//       return 'F'
//     };
//   }

// class Fauna extends Organism {
//   constructor(x, y) {
//     super(x, y)
//     this.sex = randomSex();
//     this.hunger = 100;
//   }

//   getHungry () {
//     if (updateTime()) {
//       this.hunger -= 0.02
//     }
//   }
// }

// const randomName = () => {
//   return randomWords({exactly: 1})
// }

// class Herbivore extends Fauna {
//   constructor(name, x, y, sex) {
//     super(x, y, sex)
//     this.name = name;
//   }
// }

// class Carnivore extends Fauna {
//   constructor(name, x, y, sex) {
//     super(x, y, sex)
//     this.name = name;
//   }
// }

// class Flora extends Organism {
//   constructor(name, x, y) {
//     super(x, y);
//     this.vel = new Vector(0, 0)
//     this.name = name;
//   }

//   update() {
//     this.pos.x;
//     this.pos.y;
//   }

// }

// class Funga extends Organism {
//   constructor(name) {
//     super(pos);
//     this.vel = new Vector(0, 0);
//     this.name = name;
//   }
// }


canvasSketch(sketch, settings);
