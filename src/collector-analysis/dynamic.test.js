import { describe, test } from 'vitest';

// 动态生成测试
for (let i = 0; i < 2; i++) {
  describe(`Dynamic suite ${i}`, () => {
    test(`dynamic test ${i}`, () => {
      console.log(`Dynamic test ${i} executed`);
    });
  });
}

// 条件测试
if (process.env.NODE_ENV !== 'production') {
  test('development only test', () => {
    console.log('Dev test executed');
  });
}