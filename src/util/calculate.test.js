import {
  calculate,
  toPostfix,
  calcPostfix,
  splitedExpression
} from './calculate'

test('(1+2)*(1+2) 값은 9', () => {
  expect(calculate('(1+2)*(1+2)')).toBe(9)
})

test('빼기 테스트 27-7 의 값은 20', () => {
  expect(calculate('27-7')).toBe(20)
})

test('나누기 테스트 20/2 값은 10', () => {
  expect(calculate('20/2')).toBe(10)
})

test('곱하기 테스트 2*10', () => {
  expect(calculate('2*10')).toBe(20)
})

test(`소수점이 있는 테스트`, () => {
  expect(calculate('1.2-1')).toBe(0.2)
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

test('두 자리수 쪼개기 27-7 쪼개기', () => {
  expect(splitedExpression('27-7')).toEqual(['27', '-', '7'])
})
