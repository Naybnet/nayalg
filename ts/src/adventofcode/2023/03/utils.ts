import { readFileSync } from 'node:fs'
import path from 'node:path'

const currentDir = path.join(path.resolve(__dirname), '.')
console.debug('current dir name', currentDir)

export function readInput() {
  return readFileSync(`${currentDir}/input.txt`, 'utf-8')
}

export function convertToGrid(input: string) {
  const grid: string[][] = []

  input.split('\n').forEach((line) => {
    grid.push(line.split(''))
  })

  return grid
}

export function range(size: number, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt)
}
