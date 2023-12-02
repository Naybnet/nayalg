function containsDuplicate(nums: number[]): boolean {
  let result = false
  const count: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = count[nums[i]] + 1 || 1

    if (count[nums[i]] > 1) {
      result = true
      break
    }
  }
  // console.log(count)
  return result
}

export function testContainsDuplicate() {
  console.log('lc-contains-duplicate')
  console.log(containsDuplicate([1, 2, 3, 1]) === true ? 'OK' : 'KO')
  console.log(containsDuplicate([1, 2, 3, 4]) === false ? 'OK' : 'KO')
  console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) === true ? 'OK' : 'KO')
}
