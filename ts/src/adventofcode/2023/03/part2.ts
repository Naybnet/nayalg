import * as u from './utils'

const examples = [
  '3*4.',
  `3.4.
.*..`,
  `3..5
4*..`,
  `...3
..4*`,
`..3*
...4
....`,
  `3...
4*..`,
`...3
...*
...4`,
  `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`,
`.......5......
..7*..*.....4*
...*13*......9
.......15.....
..............
..............
..............
..............
..............
..............
21............
...*9.........`,
`12.......*..
+.........34
.......-12..
..78........
..*....60...
78.........9
.5.....23..$
8...90*12...
............
2.2......12.
.*.........*
1.1..503+.56`,
]

export function part2() {
  examples.forEach((example) => {
    solve(example)
    console.log('************')
  })
  const input = u.readInput()
  solve(input)
}

function isNumber(char: string) {
  return !isNaN(parseInt(char, 10))
}

function isStar(char: string) {
  return char === '*'
}

type NumberTuple = [number, [number, number]]

function solve(input: string) {
  const g = u.DynamicGrid.fromString(input)

  const stars: [number, number][] = []
  const numbers = Array.from(new Array(g.ny), () => [] as NumberTuple[])

  // - Add each star coordinates to stars array
  // - Add each number from line iy to iy-th entry of numbers array as a tuple of
  //   number value & start/end ix index
  for (let iy = 0; iy < g.ny; iy++) {
    let num = ''
    let endIndex = -1

    for (let ix = 0; ix < g.nx; ix++) {
      const char = g.grid[iy][ix]
      const isstar = isStar(char)
      const isnumber = isNumber(char)

      if (isstar) {
        stars.push([ix, iy])
      }
      else if (isnumber) {
        num += char
        if (ix === g.nx - 1)
          endIndex = g.nx
      }

      if (!isnumber && num.length > 0)
        endIndex = ix

      if (num.length > 0 && endIndex >= 0) {
        numbers[iy].push([parseInt(num, 10), [endIndex - num.length, endIndex - 1]])
        num = ''
        endIndex = -1
      }
    }
  }

  let result = 0

  // For each star, check x indexes of the numbers in surrounding lines
  // to see is they are part numbers. If so validate that star is a gear.
  for (let is = 0; is < stars.length; is++) {
    const gearPartNumbers: number[] = []

    const [starx, stary] = stars[is]
    const numbercandidates = [
      ...(stary > 0 && numbers[stary - 1]) || [],
      ...numbers[stary],
      ...(stary < (g.ny - 1) && numbers[stary + 1]) || [],
    ]

    // console.debug(stars)
    // console.debug(numbercandidates)

    numbercandidates.forEach((numLocation) => {
      const [nb, [istart, iend]] = numLocation
      // console.debug(nb, istart, iend)
      if (Math.abs(istart - starx) <= 1 || Math.abs(iend - starx) <= 1)
        gearPartNumbers.push(nb)
    })

    // console.debug(gearPartNumbers)
    if (gearPartNumbers.length === 2)
      result += gearPartNumbers[0] * gearPartNumbers[1]
  }

  console.log('result', result)
}
