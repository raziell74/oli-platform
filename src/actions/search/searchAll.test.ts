import { searchAll } from './searchAll';
import { SearchAction } from './types';

describe('searchAll', () => {
  test('is a function', () => {
    expect(searchAll).toBeInstanceOf(Function);
  });

  test('has the correct type', () => {
    const searchAllAction: SearchAction = searchAll;
    expect(searchAllAction).toBeInstanceOf(Function);
  });

  test('runs and returns void', () => {
    const query = 'example';
    const page = 1;
    const result = searchAll({ query, page });
    expect(result).toBeUndefined();
  });
});
