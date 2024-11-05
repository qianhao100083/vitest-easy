import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    testTimeout: 5000,
    hookTimeout: 10000,
    globals: true,
    environment: 'node',
    reporters: ['verbose'],
    onConsoleLog(log, type) {
      console.log(`[Test Execution] ${type}: ${log}`);
      return false;
    },
    sequence: {
      shuffle: false,
      concurrent: false,
    },
    typecheck: {
      enabled: false,
    },
  },
});