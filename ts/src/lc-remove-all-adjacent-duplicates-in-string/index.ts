/**
 * 1047. Remove All Adjacent Duplicates In String
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/
 */

function removeDuplicates(s: string): string {
  const stack: string[] = []
  for (const char of s) {
    if (stack.length === 0) {
      stack.push(char)
    }
    else {
      if (stack[stack.length - 1] === char)
        stack.pop()
      else stack.push(char)
    }
  }
  return stack.join('')
}

export function testRemoveDuplicates() {
  console.log('lc-remove-all-adjacent-duplicates-in-string')
  console.log(removeDuplicates('abbaca') === 'ca' ? 'OK' : 'KO')
  console.log(removeDuplicates('azxxzy') === 'ay' ? 'OK' : 'KO')
  console.log(removeDuplicates('mississippi') === 'm' ? 'OK' : 'KO')
}
