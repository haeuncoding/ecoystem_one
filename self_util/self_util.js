// canvas util

const randomWords = require('random-words')
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');
 
let time;
let totalTime

const Vector = require('../classes/vector')

export function randomWidth (width) {
  return random.range(0, width);
}

export function randomHeight (height) {
  return random.range(0, height);
}

export function randomVector (width, height) {
  const x = randomWidth(width)
  const y = randomHeight(height);
  return new Vector(x, y)
}

export function randomName () {
  let arr = randomWords({exactly: 1})
  return arr[0];
}

export function randomSex () {
  let coin = Math.floor(Math.random * (2))
  if (coin < 0.5) {
      return 'M'
    } else {
      return 'F'
    };
  }

export const collide = (org1, org2) => {
  return org1.pos === org2.pos;
}

export const startTime = () => {
  time = new Date();
  time = time.getSeconds();
  return time; 
}

export const currentTime = () => {
  return Date.now()
}

export const returnTimeElapsed = () => {
  let currentSecs = new Date()
  return (currentSecs.getSeconds() + 1 );
}

export const isDay = (secs) => {
  console.log(secs)
  if (secs % 60 === 0) return true;
  return false;
}