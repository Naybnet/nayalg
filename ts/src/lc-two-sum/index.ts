function twoSumNaive(nums: number[], target: number): number[] {
  // O(n^2)
  const targets = nums.map(num => target - num)

  for (let i = 0; i < nums.length; i++) {
    const j = targets.findIndex(tar => nums[i] === tar)
    if (j === i)
      continue
    if (j >= 0)
      return [i, j]
  }
  return []
}

function twoSumSorted(nums: number[], target: number): number[] {
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#trier_avec_map
  const numaps = nums.map((value, index) => {
    return { index, value }
  }).sort((a, b) => a.value - b.value)

  let [i, j] = [0, numaps.length - 1]
  while (i < numaps.length) {
    if (i === j)
      continue
    const sum = numaps[i].value + numaps[j].value
    if (sum < target) {
      j = numaps.length - 1
      i++
      continue
    }
    if (sum === target)
      return [numaps[i].index, numaps[j].index]
    j--
  }
  return []
}

function testTwoSum() {
  console.log('lc-two-sum')
  console.log(twoSumNaive([2, 7, 11, 15], 9))
  console.log(twoSumNaive([3, 2, 4], 6))
  console.log(twoSumNaive([3, 3], 6))

  console.log(twoSumSorted([2, 7, 11, 15], 9))
  console.log(twoSumSorted([3, 2, 4], 6))
  console.log(twoSumSorted([3, 3], 6))

  console.log(twoSumMap([2, 7, 11, 15], 9))
  console.log(twoSumMap([3, 2, 4], 6))
  console.log(twoSumSMap([3, 3], 6))
}
