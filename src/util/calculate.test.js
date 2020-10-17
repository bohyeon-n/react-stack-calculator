import {
  calculate,
  toPostfix,
  calcPostfix,
  splitedExpression
} from './calculate'

test('(1+2)*(1+2) 값은 9', () => {
  calculate('(1+2)*(1+2)').toBe(9)
})

test('후위 표기법 테스트', () => {
  expect(
    toPostfix(['(', '1', '+', '2', ')', '*', '(', '1', '+', '2', ')'])
  ).toEqual(['1', '2', '+', '1', '2', '+', '*'])
})

test('후위 표기법 계산 테스트', () => {
  expect(calcPostfix(['1', '2', '+', '1', '2', '+', '*'])).toBe(9)
})

test('문자열을 표현식으로 쪼개기 테스트', () => {
  expect(splitedExpression('1.2+2.2')).toEqual(['1.2', '+', '2.2'])
})
