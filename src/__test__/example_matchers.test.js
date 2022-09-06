//*machers

describe('matcher', () => {
  it('toBe', () => {
    expect(true).toBe(true);
  });

  it('toEqueal', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });

    const array = ['one', 'two'];
    expect(array).toEqual(['one', 'two']);
  });

  it('not', () => {
    expect(true).not.toBe(false);
  });

  //   it('string', () => {
  //     expect('team').toMatch('i');
  //   });
});
