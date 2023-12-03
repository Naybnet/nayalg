import { readFileSync } from 'node:fs'
import path from 'node:path'

const currentDir = path.join(path.resolve(__dirname), '.')
console.debug('current dir name', currentDir)

export function readInput() {
  return readFileSync(`${currentDir}/input.txt`, 'utf-8')
}
