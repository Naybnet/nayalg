function romanToInt(s: string): number {
  const dc = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let sum = 0
  for (let is = 0; is < s.length;) {
    if (s[is] === 'I') {
      if (is + 1 < s.length) {
        if (s[is + 1] === 'V') {
          sum += 4
          is += 2
          continue
        }
        if (s[is + 1] === 'X') {
          sum += 9
          is += 2
          continue
        }
      }
      sum += 1
    }
    else if (s[is] === 'X') {
      if (is + 1 < s.length) {
        if (s[is + 1] === 'L') {
          sum += 40
          is += 2
          continue
        }
        if (s[is + 1] === 'C') {
          sum += 90
          is += 2
          continue
        }
      }
      sum += 10
    }
    else if (s[is] === 'C') {
      if (is + 1 < s.length) {
        if (s[is + 1] === 'D') {
          sum += 400
          is += 2
          continue
        }
        if (s[is + 1] === 'M') {
          sum += 900
          is += 2
          continue
        }
      }
      sum += 100
    }
    else {
      sum += dc[s[is]]
    }
    is++
  }
  return sum
}
