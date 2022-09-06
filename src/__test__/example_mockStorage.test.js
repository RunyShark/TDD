import { storage } from './lib/storage';
import { saveUsername } from './user';

jest.mock('./lib/storage');

describe('example storage', () => {
  it('mockStorage', () => {
    const userName = 'John doe';

    saveUsername(userName);

    expect(storage.save).toHaveBeenCalled();

    expect(storage.save).toHaveBeenCalledWith({
      key: 'username',
      value: userName,
    });
  });
});
