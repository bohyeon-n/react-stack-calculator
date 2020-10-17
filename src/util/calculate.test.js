import { calculate, toPostfix, calcPostfix } from './calculate'

test('(1+2)*(1+2) 값은 9', () => {
  calculate('(1+2)*(1+2)').toBe(9)
})

test('후위 표기법 테스트', () => {
  expect(
    toPostfix(['(', '1', '+', '2', ')', '*', '(', '1', '+', '2', ')'])
  ).toEqual(['1', '2', '+', '1', '2', '+', '*'])
})

test('후위 표기법 계산 테스트', () => {
  expect(calcPostfix(['1', '2', '+', '1', '2', '+', '*']).toBe(9))
})
