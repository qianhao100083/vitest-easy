import { expect, test, describe } from 'vitest';
import { sum, multiply } from './math.js';

// 基础测试示例
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// 使用 describe 分组测试
describe('math functions', () => {
  test('multiply 2 by 3 equals 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });
  
  test('multiply by zero equals zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

// 测试多个用例
test.each([
  [1, 1, 2],
  [2, 2, 4],
  [3, 3, 6]
])('adds %i + %i to equal %i', (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
});