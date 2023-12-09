import { readFileSync } from 'node:fs'
import path from 'node:path'

const currentDir = path.join(path.resolve(__dirname), '.')
console.debug('current dir name', currentDir)

export function readInput() {
  return readFileSync(`${currentDir}/input.txt`, 'utf-8')
}

export function range(size: number, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt)
}

export class DynamicGrid<T> {
  readonly nx: number
  readonly ny: number
  readonly grid: T[][]

  constructor(elements: T[][]) {
    this.grid = elements
    this.nx = elements.length > 0 ? elements[0].length : 0
    this.ny = elements.length
  }

  static fromString(input: string) {
    return new DynamicGrid(input.split('\n').map(line => line.split('')))
  }

  coords() {
    return this.grid.map((line, iy) => (line.map((_, ix) => [ix, iy] as const)))
  }

  apply(callback: (ix: number, iy: number) => void) {
    for (let iy = 0; iy < this.ny; iy++) {
      for (let ix = 0; ix < this.nx; ix++)
        callback(ix, iy)
    }
  }

  toString() {
    return this.grid.map(line => line.join('')).join('\n')
  }
}
