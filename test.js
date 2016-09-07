describe('Roman Numeral Converter', function() {
    it('Result', function(done) {
        expect(convertToRoman(2)).toBe('II');
    });
    it('Result', function(done) {
        expect(convertToRoman(3)).toBe('III');
    });
    it('Result', function(done) {
        expect(convertToRoman(4)).toBe('IV');
    });
    it('Result', function(done) {
        expect(convertToRoman(5)).toBe('V');
    });
    it('Result', function(done) {
        expect(convertToRoman(9)).toBe('IX');
    });
    it('Result', function(done) {
        expect(convertToRoman(12)).toBe('XII');
    });
    it('Result', function(done) {
        expect(convertToRoman(16)).toBe('XVI');
    });
    it('Result', function(done) {
        expect(convertToRoman(29)).toBe('XXIX');
    });
    it('Result', function(done) {
        expect(convertToRoman(44)).toBe('XLIV');
    });
    it('Result', function(done) {
        expect(convertToRoman(45)).toBe('XLV');
    });
    it('Result', function(done) {
        expect(convertToRoman(68)).toBe('LXVIII');
    });
    it('Result', function(done) {
        expect(convertToRoman(83)).toBe('LXXXIII');
    });
    it('Result', function(done) {
        expect(convertToRoman(97)).toBe('XCVII');
    });
    it('Result', function(done) {
        expect(convertToRoman(99)).toBe('XCIX');
    });
    it('Result', function(done) {
        expect(convertToRoman(500)).toBe('D');
    });
    it('Result', function(done) {
        expect(convertToRoman(501)).toBe('DI');
    });
    it('Result', function(done) {
        expect(convertToRoman(649)).toBe('DCLXLIX');
    });
    it('Result', function(done) {
        expect(convertToRoman(798)).toBe('DCCXCVIII');
    });
    it('Result', function(done) {
        expect(convertToRoman(891)).toBe('DCCCXCI');
    });
    it('Result', function(done) {
        expect(convertToRoman(1000)).toBe('M');
    });
    it('Result', function(done) {
        expect(convertToRoman(1004)).toBe('MIV');
    });
    it('Result', function(done) {
        expect(convertToRoman(1006)).toBe('MVI');
    });
    it('Result', function(done) {
        expect(convertToRoman(1023)).toBe('MXXIII');
    });
    it('Result', function(done) {
        expect(convertToRoman(2014)).toBe('MMXIV');
    });
    it('Result', function(done) {
        expect(convertToRoman(3999)).toBe('MMMXMXCIX');
    });
});
