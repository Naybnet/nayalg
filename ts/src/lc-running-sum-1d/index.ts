function runningSum1(nums: number[]): number[] {
  // Add ith number to all the following entries in the array
  // which counts n + (n-1) + ... + 1 = n(n+1)/2 = O(n^2)

  if (nums.length > 1000)
    throw new Error('input too long')

  // This cannot be done in place
  const result = nums.slice()
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // console.log('i', i, 'j', j, 'numi', nums[i])
      result[j] += nums[i]
    }
  }
  // console.log(result)
  return result
}

function runningSum(nums: number[]): number[] {
  // Use an external accumulator
  let accumulator = nums[0]

  if (nums.length > 1000)
    throw new Error('input too long')

  for (let i = 1; i < nums.length; i++) {
    nums[i] += accumulator
    accumulator = nums[i]
  }
  return nums
}

export function testRunningSum() {
  console.log('lc-running-sum-1d')
  const equal = (a: number[], ref: number[]) => a.map((item, index) => item === ref[index])

  console.log(equal(runningSum1([1, 2, 3, 4]), [1, 3, 6, 10]) ? 'OK' : 'KO')

  console.log(equal(runningSum([1, 2, 3, 4]), [1, 3, 6, 10]) ? 'OK' : 'KO')
  console.log(equal(runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]) ? 'OK' : 'KO')
  console.log(equal(runningSum([3, 1, 2, 10, 1]), [3, 4, 6, 16, 17]) ? 'OK' : 'KO')
}
