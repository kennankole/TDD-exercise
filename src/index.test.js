const stringCount = require('./index')

test(`counts "ankoe" equals to 5`, () => {
    const str = "ankoe";
    expect(str.length).toBeLessThanOrEqual(10);
    expect(stringCount(str)).toEqual(5);
    expect(stringCount('')).toBeUndefined();
});