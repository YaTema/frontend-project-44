import runEngine from '../index.js'

const getGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a)
  }
  return getGcd(b, a % b)
}

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 100) + 1
  const num2 = Math.floor(Math.random() * 100) + 1

  const question = `${num1} ${num2}`
  const correctAnswer = String(getGcd(num1, num2))

  return [question, correctAnswer]
}

const description = 'Find the greatest common divisor of given numbers.'

const runGcdGame = () => {
  runEngine(description, generateRound)
}

export default runGcdGame
