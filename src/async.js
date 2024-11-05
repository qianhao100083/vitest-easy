export async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'test' });
    }, 100);
  });
}

export class Database {
  constructor() {
    this.data = new Map();
  }

  async connect() {
    await new Promise(resolve => setTimeout(resolve, 50));
    return true;
  }

  async save(key, value) {
    await new Promise(resolve => setTimeout(resolve, 10));
    this.data.set(key, value);
    return true;
  }
}