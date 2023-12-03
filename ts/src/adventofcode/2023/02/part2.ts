import * as u from './utils'

export function part2() {
  const input = u.readInput()
  const data = input.split('\n')

  let result = 0

  for (let iline = 0; iline < data.length; iline++) {
    const line = data[iline]
    if (line.length === 0)
      continue

    const [_, gameContent] = line.split(':')

    const rounds = gameContent.split(';')

    const maxCubes = { red: 0, blue: 0, green: 0 }

    for (let iround = 0; iround < rounds.length; iround++) {
      const draw = rounds[iround].split(',').reduce<Record<'red' | 'blue' | 'green', number>>((previous, curdraw) => {
        const [value, color] = curdraw.trim().split(' ')

        return ({
          ...previous,
          [color.trim()]: parseInt(value, 10),
        })
      }, { red: 0, green: 0, blue: 0 })

      if (draw.red && draw.red > maxCubes.red)
        maxCubes.red = draw.red
      if (draw.blue && draw.blue > maxCubes.blue)
        maxCubes.blue = draw.blue
      if (draw.green && draw.green > maxCubes.green)
        maxCubes.green = draw.green

      console.debug(`round ${iround}`, rounds[iround], 'draw', draw)
    }

    const power = maxCubes.red * maxCubes.blue * maxCubes.green

    console.debug('maxcubes', maxCubes, 'power', power)

    result += power
  }

  console.log('result', result)
}
