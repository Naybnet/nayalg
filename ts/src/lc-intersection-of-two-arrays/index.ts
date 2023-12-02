function intersection(nums1: number[], nums2: number[]): number[] {
  const l1 = nums1.length
  const l2 = nums2.length

  const result: Set<number> = new Set()

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]))
      result.add(nums1[1])
  }

  return Array.from(result)
}
