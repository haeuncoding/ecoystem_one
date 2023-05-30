const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');
const selfUtil = require('./self_util/self_util')

const Tweakpane = require('./interface/tweakpane')
const population = require('./classes/population')
const settings = {
  dimensions: [ 2048, 2048 ],
  animate: true,
  fps: 30
};

let seconds = 0
let previousSeconds = 0;

let dayCount = 0


let pObj = new Tweakpane();
const pane = pObj.createPane()


const sketch = ({context, width, height}) => {
  const organisms = new population(context, pObj.params.population, width, height, pObj.params);
  organisms.populate();
  let seconds
  selfUtil.startTime();
  return ({ context, width, height, frame }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    console.log(selfUtil.returnTimeElapsed())
    organisms.update()
  };
};

canvasSketch(sketch, settings);