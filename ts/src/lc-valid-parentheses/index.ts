/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * Takeaways:
 * - balanced expressions => stack
 * - replace switch expressions or nested ternary expressions with a map when there is a 1-to-1 correspondence
 * - enumerate character in string: for(let i; i<s.length;i++) s[i] OR for(const char of s)
 */

function isValid1(s: string): boolean {
  if (s.length > 10000)
    throw new Error('Expression too long')
  const matching = (char: string) => char === ')' ? '(' : (char === ']' ? '[' : (char === '}' ? '{' : undefined))

  const stack = []
  for (let is = 0; is < s.length; is++) {
    if (s[is] === '{' || s[is] === '(' || s[is] === '[') {
      console.log('ouvrante => ajout à la stack', s[is])
      stack.push(s[is])
    }
    else if (s[is] === '}' || s[is] === ')' || s[is] === ']') {
      if (stack.length === 0) {
        console.log('fermante et stack vide => return false')
        return false
      }

      console.log('fermante et stack non vide => on regarde le dernier élement de la stack pour trouver un match', s[is])
      if (stack[stack.length - 1] === matching(s[is])) {
        console.log('match trouvé', stack[stack.length - 1], 'on pop de la stack')
        stack.pop()
      }
      else {
        console.log('match non trouvé', stack[stack.length - 1], '=> return false')
        return false
      }
    }
  }
  console.log('à la fin la stack doit être vide', stack)
  return stack.length === 0
}

type OpeningParentheses = '{' | '(' | '['
type ClosingParentheses = '}' | ')' | ']'

function isValid(s: string): boolean {
  const matching: Record<OpeningParentheses, ClosingParentheses> = { '{': '}', '(': ')', '[': ']' }
  const stack: Array<OpeningParentheses> = []

  for (const char of s) {
    if (char in matching) {
      stack.push(char as OpeningParentheses)
    }
    else {
      const last = stack.pop()
      if (!last || matching[last] !== char)
        return false
    }
  }
  return stack.length === 0
}

export function testIsValid() {
  console.log('lc-valid-parenthesis')
  console.log(isValid1('()') === true ? 'OK' : 'KO')
  console.log(isValid1('()[]{}') === true ? 'OK' : 'KO')
  console.log(isValid1('(]') === false ? 'OK' : 'KO')

  console.log(isValid('()') === true ? 'OK' : 'KO')
  console.log(isValid('()[]{}') === true ? 'OK' : 'KO')
  console.log(isValid('(]') === false ? 'OK' : 'KO')
}
