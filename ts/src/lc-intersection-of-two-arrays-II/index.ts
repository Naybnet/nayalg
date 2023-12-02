/**
 * 350. Intersection of Two Arrays II
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 *
 * Takeaways:
 * To optimze for search, trade of memory and create a hash map O(m+n)
 */
function intersectLoop(nums1: number[], nums2: number[]): number[] {
  // Loop over smaller array
  // When common entry found update entry to -1 to mark it counted
  // O(N1*N2)
  const looped = nums1.length < nums2.length ? nums1 : nums2
  const target = nums1.length < nums2.length ? nums2 : nums1

  const result: number[] = []

  for (let il = 0; il < looped.length; il++) {
    for (let it = 0; it < target.length; it++) {
      if (looped[il] === target[it]) {
        result.push(looped[il])
        target[it] = -1
        break
      }
    }
  }

  return result
}

/**
 * Follow up:

    What if the given array is already sorted? How would you optimize your algorithm?
    -> I would use a binary search instead of a loop to find the match in O(log N)
       => O(N1*log(N2)) assuming N2 sorted

    What if nums1's size is small compared to nums2's size? Which algorithm is better?
    ->

    What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once
 */

function intersectMap(nums1: number[], nums2: number[]): number[] {
  // Use memory to constitute hash map
  // TODO
  return []
}

export function testIntersectII() {
  console.log('lc-intersection-of-two-arrays-II')
  const equal = (a: number[], ref: number[]) => a.map((item, index) => item === ref[index])

  console.log(equal(intersectLoop([1, 2, 2, 1], [2, 2]), [2, 2]) ? 'OK' : 'KO')
  console.log(equal(intersectLoop([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]) ? 'OK' : 'KO')

  intersectMap([1, 2, 2, 1], [2, 2])
}
