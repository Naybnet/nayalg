/**
 * 28. Find the Index of the First Occurrence in a String
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/submissions/927366111/
 */

function _strStr(haystack: string, needle: string): number {
  if (needle.length > 10000)
    throw new Error('needle too big')

  let cursor = 0
  for (let is = 0; is < haystack.length; is++) {
    // console.log('is', is, 'cursor', cursor)
    if (cursor !== 0 && haystack[is] !== needle[cursor]) {
      // Return to the beginning of the tested substring
      is = is - cursor
      // Reset cursor
      cursor = 0
      // Next loop will add 1 to is and start looking for new match
      continue
    }
    else if (haystack[is] === needle[cursor]) {
      cursor++
    }

    if (cursor === needle.length) {
      // Beginning index of first match
      return is + 1 - needle.length
    }
  }
  return -1
}
