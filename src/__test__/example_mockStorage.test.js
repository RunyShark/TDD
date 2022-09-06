import { storage } from './lib/storage';
import { saveUsername, getUsername } from './user';

jest.mock('./lib/storage');

describe('example storage', () => {
  it('Save user name', () => {
    const userName = 'John doe';

    saveUsername(userName);

    expect(storage.save).toHaveBeenCalledTimes(1);

    expect(storage.save).toHaveBeenCalledWith({
      key: 'username',
      value: userName,
    });
  });

  it('Get user name', () => {
    const userName = 'John doe';

    storage.get.mockReturnValueOnce(userName);

    const result = getUsername();
    console.log(result);

    expect(result).toBe(userName);

    expect(storage.get).toHaveBeenCalledTimes(1);

    expect(storage.get).toHaveBeenCalledWith({ key: result });
  });
});
