function isPalindrome1(x: number): boolean {
  const n2s = x.toString()
  for (let ichar = 0; ichar < Math.floor(n2s.length / 2); ichar++) {
    if (n2s[ichar] !== n2s[n2s.length - ichar - 1])
      return false
  }

  return true
}

export function testIsPalindrome() {
  console.log('lc-palindrome-number')
  console.log('121', isPalindrome1(121) === true ? 'OK' : 'KO')
}
