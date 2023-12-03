import * as u from './utils'

function isDot(char: string) {
  return char === '.'
}

function isNumber(char: string) {
  return !isNaN(parseInt(char, 10))
}

function isSymbol(char: string) {
  return !isDot(char) && !isNumber(char) && char.length > 0
}

export function part1() {
  const input = u.readInput()

  let result = 0

  const lines = input.split('\n')

  for (let iy = 0; iy < lines.length; iy++) {
    console.debug(lines[iy])

    let startIndex = -1
    let endIndex = -1
    let num = ''

    for (let ix = 0; ix < lines[iy].length; ix++) {
      const char = lines[iy][ix]
      const isdot = isDot(char)
      const isnumber = isNumber(char)
      const issymbol = isSymbol(char)
      // console.debug('char', char, isdot, isnumber, issymbol)

      if (isnumber) {
        num += char
        if (startIndex < 0)
          startIndex = ix
        if (ix === lines[iy].length - 1 && startIndex >= 0)
          endIndex = ix
      }
      else if (isdot || issymbol) {
        if (startIndex >= 0)
          endIndex = ix - 1
      }

      if (startIndex >= 0 && endIndex >= 0) {
        const parsed = parseInt(num, 10)

        const right = lines[iy][endIndex + 1]
        const left = startIndex > 0 ? lines[iy][startIndex - 1] : undefined

        const range = u.range(endIndex - startIndex + 1, startIndex)

        const top = iy > 0 ? range.map(elem => lines[iy - 1][elem]) : []

        if (top.length > 0) {
          if (startIndex > 0)
            top.splice(0, 0, lines[iy - 1][startIndex - 1])
          if (endIndex < lines[iy].length - 1)
            top.push(lines[iy - 1][endIndex + 1])
        }

        const bottom = iy < lines.length - 1 ? range.map(elem => lines[iy + 1][elem]) : []

        if (bottom.length > 0) {
          if (startIndex > 0)
            bottom.splice(0, 0, lines[iy + 1][startIndex - 1])
          if (endIndex < lines[iy].length - 1)
            bottom.push(lines[iy + 1][endIndex + 1])
        }

        const isAPartNumber = [...top, right || '', ...bottom, left || ''].filter(elem => isSymbol(elem)).length > 0

        console.debug('parsed', parsed, 'left', left, 'right', right, 'top', top, 'bottom', bottom, 'isAPartNumber', isAPartNumber)

        if (isAPartNumber)
          result += parsed
        num = ''
        startIndex = -1
        endIndex = -1
      }
    }
  }

  console.log('result', result)
}
