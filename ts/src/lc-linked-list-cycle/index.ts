class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function hasCycle(head: ListNode | null): boolean {
  let found = false
  let current = head
  const set: ListNode[] = []
  while (!found && current !== null) {
    if (set.includes(current))
      found = true
    set.push(current)
    current = current.next
  }
  return found
}
