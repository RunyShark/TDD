const asyncCallback = (cb) => {
  setTimeout(() => {
    cb(true);
  }, 1000);
};

const asyncPromisse = () => new Promise((resolve) => resolve(true));

describe('async code', () => {
  it('example of async with callback', (done) => {
    asyncCallback((result) => {
      expect(result).toBe(true);
      done();
    });
  });

  it('example test whit promisse', () => {
    return asyncPromisse().then((result) => expect(result).toBe(true));
  });

  it('example test whit promisse 2', () => {
    return expect(asyncPromisse()).resolves.toBe(true);
  });

  it.only('example test whit async await', async () => {
    const result = await asyncPromisse();

    expect(result).toBe(true);
  });
});
