class RndInt {
  #randomInteger
  constructor () {
    this.#randomInteger = Math.ceil(Math.random()*100)
  }

  get value () {
    return this.#randomInteger
  }
}

export default RndInt;