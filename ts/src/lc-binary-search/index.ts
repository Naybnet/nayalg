function search(nums: number[], target: number): number {
  let len = nums.length
  let istart = 0
  let iend = len - 1
  while (len > 1) {
    const imiddle = len % 2 === 0 ? istart + len / 2 - 1 : istart + Math.floor(len / 2)
    // console.log('imiddle', imiddle)
    if (nums[imiddle] === target) {
      // console.log('nums[imiddle]', nums[imiddle], target)
      return imiddle
    }
    if (nums[imiddle] < target) {
      istart = imiddle + 1
      len = iend - istart + 1
      // console.log('updated istart', istart)
    }
    else {
      iend = imiddle + 1
      len = iend - istart + 1
      // console.log('updated iend', iend)
    }
    // console.log('updated len', len)
  }
  return nums[istart] === target ? istart : -1
}

export function testSearch() {
  console.log(search([-1, 0, 3, 5, 9, 12], 9))
  console.log(search([-1, 0, 3, 5, 9, 12], 2))
}

// Not suceeded in leetcode interface because could not break on while loop
// TODO implement a recursive version
