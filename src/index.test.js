const stringCount = require('./index');
const reverseStr = require('./reverse');

test(`counts "ankoe" equals to 5`, () => {
    const str = "ankoe";
    expect(str.length).toBeLessThanOrEqual(10);
    expect(stringCount(str)).toEqual(5);
    expect(stringCount('')).toBeUndefined;
});

test(`reverses "kenn" to "nnek"`, () => {
    const str = "kenn";
    expect(reverseStr(str)).toEqual("nnek");
})