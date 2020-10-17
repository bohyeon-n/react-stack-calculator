export const calculate = expression => {}

const operationOrder = {
  '+': 2,
  '-': 2,
  '/': 3,
  '*': 3,
  '(': 1,
  ')': 1
}

export const toPostfix = expression => {
  const stack = []
  const result = []

  for (let i = 0; i < expression.length; i++) {
    let lastStack = stack[stack.length - 1]
    const key = expression[i]

    if (key === '(') {
      stack.push(key)
      continue
    }

    if (key === ')') {
      while (true) {
        if (lastStack === '(') {
          stack.pop()
          break
        }
        result.push(stack.pop())
        lastStack = stack[stack.length - 1]
      }
      continue
    }

    if (key in operationOrder) {
      if (!lastStack) {
        stack.push(key)
      } else {
        if (operationOrder[key] <= operationOrder[lastStack]) {
          result.push(stack.pop())
          stack.push(key)
        } else {
          stack.push(key)
        }
      }
    } else {
      result.push(key)
    }
  }
  return [...result, ...stack]
}
