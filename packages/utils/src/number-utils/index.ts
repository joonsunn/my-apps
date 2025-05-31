export function getRandomInt(min: number, max: number) {
  const randomNumber = crypto.getRandomValues(new Uint32Array(1))[0] / Math.pow(2, 32)

  return Math.floor(randomNumber * (max - min + 1)) + min
}
