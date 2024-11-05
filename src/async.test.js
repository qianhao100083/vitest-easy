import { expect, test, describe, beforeEach, afterEach, vi } from 'vitest';
import { fetchData, Database } from './async.js';

// 异步测试示例
describe('Async Tests', () => {
  test('async/await test', async () => {
    const result = await fetchData();
    expect(result).toEqual({ data: 'test' });
  });

  // 测试超时设置
  test('timeout test', async () => {
    const result = await fetchData();
    expect(result).toEqual({ data: 'test' });
  }, 1000); // 设置超时时间

  // 使用 mock 定时器
  test('with mocked timer', async () => {
    vi.useFakeTimers();
    const promise = fetchData();
    vi.runAllTimers();
    const result = await promise;
    expect(result).toEqual({ data: 'test' });
    vi.useRealTimers();
  });
});

// 使用钩子函数
describe('Database Tests', () => {
  let db;

  beforeEach(async () => {
    db = new Database();
    await db.connect();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  test('should save data', async () => {
    const spy = vi.spyOn(db, 'save');
    await db.save('key', 'value');
    expect(spy).toHaveBeenCalledWith('key', 'value');
    expect(db.data.get('key')).toBe('value');
  });

  // 测试并发
  test.concurrent('concurrent test 1', async () => {
    await db.save('key1', 'value1');
    expect(db.data.get('key1')).toBe('value1');
  });

  test.concurrent('concurrent test 2', async () => {
    await db.save('key2', 'value2');
    expect(db.data.get('key2')).toBe('value2');
  });
});

// 快照测试示例
test('snapshot test', () => {
  const data = {
    createdAt: new Date(),
    id: Math.random(),
    name: 'test'
  };
  
  expect(data).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number)
  });
});