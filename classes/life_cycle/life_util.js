// life util

const Herbivore = require('../kingdoms/fauna_categories/herbivore');
const Carnivore = require('../kingdoms/fauna_categories/carnivore');
const Omnivore = require('../kingdoms/fauna_categories/omnivore')
const Flora = require('../kingdoms/flora');
const Funga = require('../kingdoms/funga')

export function isApex () {
  let num = Math.random();
  if (num < 0.9) return true;
  return false;
}

export function eat (eater, eaten) {

  if (isHerbivore(eater) && isFlora(eaten)) return true;
  if (isCarnivore(eater) && isHerbivore(eaten)) return true;
  if (isOmnivore(eater) && isCarnivore(eaten)) return true;
  if (isCarnivore(eater) && isCarnivore(eaten)) return true;
}

export function isHerbivore (org) {
  return org instanceof Herbivore
}

export function isCarnivore (org) {
  return org instanceof Carnivore  
}

export function isOmnivore (org) {
  return org instanceof Omnivore;
}

export function isFlora (org) {
  return org instanceof Flora
}

export function isFunga (org) {
  return org instanceof Funga
}