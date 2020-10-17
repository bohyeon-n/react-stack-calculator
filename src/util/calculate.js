export const calculate = expression => {}

export const splitedExpression = expression => {
  let preValue = null
  const splitedExpression = []
  expression.split('').forEach(value => {
    if (value === '.' || preValue === '.') {
      splitedExpression[splitedExpression.length - 1] += value
    } else {
      splitedExpression.push(value)
    }
    preValue = value
  })

  return splitedExpression
}

export const toPostfix = expression => {
  const operationOrder = {
    '+': 2,
    '-': 2,
    '/': 3,
    '*': 3,
    '(': 1,
    ')': 1
  }

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

export const calcPostfix = expression => {
  const stack = []

  for (let i = 0; i < expression.length; i++) {
    switch (expression[i]) {
      case '+':
        stack.push(stack.pop() + stack.pop())
        break
      case '-':
        stack.push(stack.pop() - stack.pop())
        break
      case '*':
        stack.push(stack.pop() * stack.pop())
        break
      case '/':
        stack.push(stack.pop() / stack.pop())
        break
      default:
        stack.push(Number(expression[i]))
    }
  }

  return stack.pop()
}
