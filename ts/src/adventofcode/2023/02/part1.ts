import * as u from './utils'

const ncubes = { red: 12, green: 13, blue: 14 }

export function part1() {
  const input = u.readInput()
  const data = input.split('\n')

  let result = 0

  for (let iline = 0; iline < data.length; iline++) {
    const line = data[iline]
    if (line.length === 0)
      continue
    const [gameName, gameContent] = line.split(':')

    const gameId = parseInt(gameName.split(' ')[1], 10)
    const rounds = gameContent.split(';')

    let increment = true

    for (let iround = 0; iround < rounds.length; iround++) {
      const draw = rounds[iround].split(',').reduce<Record<'red' | 'blue' | 'green', number>>((previous, curdraw) => {
        const [value, color] = curdraw.trim().split(' ')

        return ({
          ...previous,
          [color.trim()]: parseInt(value, 10),
        })
      }, { red: 0, green: 0, blue: 0 })

      console.debug(`round ${iround}`, rounds[iround], 'draw', draw, 'gameid', gameId)

      if (!(draw.red <= ncubes.red && draw.blue <= ncubes.blue && draw.green <= ncubes.green)) {
        increment = false
        break
      }
    }

    if (increment)
      result += gameId
  }

  console.log('result', result)
}
