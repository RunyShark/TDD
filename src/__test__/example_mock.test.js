describe('mock', () => {
  it('example 1', () => {
    const myMock = jest.fn().mockReturnValueOnce(true).mockReturnValueOnce(1);

    const result1 = myMock();
    const result2 = myMock();

    expect(result1).toBe(true);
    expect(result2).toBe(1);
  });
});
