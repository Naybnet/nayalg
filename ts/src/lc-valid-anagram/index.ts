/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * Takeaways:
 * reduce dimensions by transforming the problem in a comparison of hash maps
 * you should practice working with JS strings more!
 */
function isAnagramNaive(s: string, t: string): boolean {
  // Naive solution very poor performance O(n*m)
  if (t.length !== s.length)
    return false

  for (const schar of s) {
    const index = t.indexOf(schar)
    if (index >= 0)
      t = t.substring(0, index) + t.substring(index + 1) // you can't slice strings in JS

    else return false
  }
  return t.length === 0
}

function isAnagram(s: string, t: string): boolean {
  if (t.length !== s.length)
    return false

  const result: Record<string, number> = {}
  for (const schar of s)
    result[schar] = result[schar] ? result[schar] + 1 : 1

  for (const tchar of t) {
    if (!(tchar in result))
      return false
    result[tchar]--
    if (result[tchar] === 0)
      delete result[tchar]
  }
  return Object.keys(result).length === 0
}
