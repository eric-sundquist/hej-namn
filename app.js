import RndInt from './RndInt.js'

console.log('Kan jag skriva kod längre?')

const intRandomizer = new RndInt()
const randomInt = intRandomizer.value

const isEven = randomInt % 2 === 0

if (isEven) {
  console.log('JAAA!')
} else (
  console.log('NEEEJ!')
)

