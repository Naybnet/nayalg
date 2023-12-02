/**
 * 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 */

function topKFrequent(nums: number[], k: number): number[] {
  const mapnum: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++)
    mapnum[nums[i]] = mapnum[nums[i]] ? mapnum[nums[i]] + 1 : 1

  return Object.entries(mapnum).sort((a, b) => -a[1] + b[1]).slice(0, k).map(elem => parseInt(elem[0]))
}
