import * as u from './utils'

export function part1() {
  const input = u.readInput()
  const data = input.split('\n')

  let result = 0
  console.log('number lines', data.length)

  for (let iline = 0; iline < data.length; iline++) {
    const line = data[iline]

    let first = 0
    let last = 0

    for (const ch of line) {
      const parsed = parseInt(ch, 10)
      // console.debug('char', ch, parseInt(ch, 10))
      if (!isNaN(parsed)) {
        if (first === 0)
          first = parsed
        else
          last = parsed
      }
    }

    if (last === 0)
      last = first

    const lineresult = parseInt(`${first}${last}`, 10)
    result += lineresult
    console.debug('line', line, lineresult, result)
  }
  console.debug('result', result)
}
