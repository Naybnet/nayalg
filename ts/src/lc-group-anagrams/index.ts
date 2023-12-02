/**
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/description/
 */

function groupAnagramsNaive(strs: string[]): string[][] {
  // Memory >= 5% of leetcoders - CPU >= 20% of leetcoders
  const resultmap: Record<string, string[]> = {}

  for (let i = 0; i < strs.length; i++) {
    const anamap: Record<string, number> = {}
    for (const schar of strs[i])
      anamap[schar] = anamap[schar] ? anamap[schar] + 1 : 1

    let outkey = ''
    Object.keys(anamap).sort().forEach((el) => {
      outkey += `${el}${anamap[el]}`
    })
    if (resultmap[outkey])
      resultmap[outkey].push(strs[i])
    else resultmap[outkey] = [strs[i]]
  }

  return Object.values(resultmap)
}

// function groupAnagrams() {}

export function testGroupAnagrams() {
  const equal = (a: string[][], ref: string[][]) => a.map((arrayitem, aindex) => arrayitem.map((item, iindex) => item === ref[aindex][iindex]))
  console.log(equal(groupAnagramsNaive(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']), [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]))
}
