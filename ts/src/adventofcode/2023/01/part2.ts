import * as u from './utils'

const letters = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] as const
const mapl = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 }

export function part2() {
  const input = u.readInput()
  const data = input.split('\n')

  let result = 0
  console.log('number lines', data.length)

  for (let iline = 0; iline < data.length; iline++) {
    const line = data[iline]

    let first = 0
    let firstIndex = Infinity
    let last = 0
    let lastIndex = -1

    for (let ichar = 0; ichar < line.length; ichar++) {
      const ch = line[ichar]
      const parsed = parseInt(ch, 10)

      if (!isNaN(parsed)) {
        if (first === 0) {
          first = parsed
          firstIndex = ichar
        }
        else {
          last = parsed
          lastIndex = ichar
        }
      }
    }

    if (last === 0) {
      last = first
      lastIndex = firstIndex
    }

    let firstLetter: keyof typeof mapl | undefined
    let lastLetter: keyof typeof mapl | undefined

    letters.forEach((letter) => {
      let foundIndex = line.indexOf(letter)
      if (foundIndex === -1)
        return
      if (foundIndex < firstIndex) {
        firstIndex = foundIndex
        firstLetter = letter
      }
      foundIndex = line.lastIndexOf(letter)
      if (foundIndex > lastIndex) {
        lastIndex = foundIndex
        lastLetter = letter
      }
    })

    if (firstLetter !== undefined)
      first = mapl[firstLetter]

    if (lastLetter !== undefined)
      last = mapl[lastLetter]

    const lineresult = parseInt(`${first}${last}`, 10)
    result += lineresult
    console.debug('line', line, lineresult, first, last, result)
  }
  console.log('result', result)
}
