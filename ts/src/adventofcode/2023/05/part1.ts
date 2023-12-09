import * as u from './utils'

const examples = [
  `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4
`,
]

const sectionsNames = [
  'seed-to-soil', 'soil-to-fertilizer', 'fertilizer-to-water', 'water-to-light',
  'light-to-temperature', 'temperature-to-humidity', 'humidity-to-location',
]

export function part1() {
  examples.forEach((example) => {
    solve(example)
    console.log('************')
  })
  const input = u.readInput()
  solve(input)
}

function parseSeeds(line: string) {
  return line.split(':')[1].split(' ').filter(el => el.length > 0).map(el => parseInt(el, 10))
}

function parseMap(line: string) {
  return line.split(' ').filter(el => el.length > 0).map(el => parseInt(el, 10))
}

type NumberTuple = [number, number, number, number]

function solve(input: string) {
  let seeds: number[] = []
  let sectionIndex = -1

  const sections = Array.from(new Array(sectionsNames.length), () => [] as NumberTuple[])

  input.split('\n').forEach((line) => {
    if (line.length === 0)
      return

    // console.debug('line', line)

    // Read section header

    const isSeedsLine = line.match('seeds:')
    if (isSeedsLine) {
      seeds = parseSeeds(line)
      return
    }

    const isSectionHeader = line[line.length - 1] === ':'
    if (isSectionHeader) {
      sectionIndex++
      return
    }

    // Read section content

    const [destinationStart, sourceStart, rangelength] = parseMap(line)

    sections[sectionIndex].push([destinationStart, sourceStart, sourceStart + rangelength - 1, rangelength])
    // console.debug(sectionIndex, sections[sectionIndex])
  })

  for (let is = 0; is < sections.length; is++)
    sections[is] = sections[is].sort((a, b) => (a[1] - b[1]))

  console.debug('seeds', seeds)
  console.debug('sections', sections)

  let result = Infinity

  for (let iseed = 0; iseed < seeds.length; iseed++) {
    let mapped = seeds[iseed]

    const res: number[] = [mapped]
    let mappedSectionIndex = -1

    for (let is = 0; is < sections.length; is++) {
      const section = sections[is]

      for (let imap = 0; imap < section.length; imap++) {
        if (mapped >= section[imap][1] && mapped <= section[imap][2]) {
          mappedSectionIndex++

          const delta = mapped - section[imap][1]
          const updatedmapped = section[imap][0] + delta
          res.push(updatedmapped)
          mapped = updatedmapped

          break
        }
      }

      if (mappedSectionIndex !== is) {
        res.push(mapped)
        mappedSectionIndex++
      }
    }

    if (mapped < result)
      result = mapped

    console.debug(res)
  }

  console.log('result', result)
}
