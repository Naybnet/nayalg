import * as u from './utils'

const examples = [
  `Card   1: 1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card   2: 2  3 70  9  8 | 69 82 63 72 16 21 14  2
Card   3: 2  3 70  9  8 | 69 82 63 72 16 21 14  23`,
]

function splitToNumber(numberstring: string) {
  return numberstring.split(' ').map(v => parseInt(v, 10)).filter(v => !isNaN(v))
}

export function part1() {
  examples.forEach((example) => {
    solve(example)
    console.log('************')
  })
  const input = u.readInput()
  solve(input)
}

function solve(input: string) {
  const lines = input.split('\n')

  let result = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    const [winning, game] = line.split(':')[1].split('|')
    const intersection = u.intersection(splitToNumber(winning), splitToNumber(game))

    const points = intersection.length === 0 ? 0 : 2 ** (intersection.length - 1)
    console.debug('wining', winning, 'game', game, 'intersection', intersection, 'points', points)

    result += points
  }

  console.log('result', result)
}
