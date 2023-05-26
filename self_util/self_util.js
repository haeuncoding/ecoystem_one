// canvas util

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

export const randomName = () => {
  return randomWords({exactly: 1})
}