/**
 * 225. Implement Stack using Queues
 * https://leetcode.com/problems/implement-stack-using-queues/description/
 *
 * Takeaways:
 * - it is very easy to build a stack from an array
 * - it serves if you want to constrain the operations that you can use on an instance of an array
 */

class MyStack {
  private _stack: number[]

  constructor() {
    this._stack = []
  }

  push(x: number): void {
    this._stack.push(x)
  }

  pop(): number | undefined {
    return this._stack.pop()
  }

  top(): number | undefined {
    return this._stack.length > 0 ? this._stack[this._stack.length - 1] : undefined
  }

  empty(): boolean {
    return this._stack.length === 0
  }
}

export function testMyStack() {
  const stack = new MyStack()
  stack.push(1)
  stack.push(2)
  stack.top()
  stack.pop()
  stack.empty()
}
