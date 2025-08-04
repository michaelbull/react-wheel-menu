import {
    describe,
    expect,
    it,
} from 'vitest';
import { modulo } from './modulo';

describe('modulo', () => {
    describe('when the dividend is 0', () => {
        it('returns 0 when the divisor is positive', () => {
            expect(modulo(0, 5)).toBe(0);
        });

        it('returns 0 when the divisor is negative', () => {
            expect(modulo(0, -5)).toBe(0);
        });

        it('returns 0 when the divisor is 1', () => {
            expect(modulo(0, 1)).toBe(0);
        });
    });

    describe('when the dividend equals the divisor', () => {
        it('returns the dividend for positive equal numbers', () => {
            expect(modulo(5, 5)).toBe(5);
        });

        it('returns the dividend for negative equal numbers', () => {
            expect(modulo(-10, -10)).toBe(-10);
        });
    });


    describe('with positive dividends', () => {
        it('returns the correct remainder for 7 modulo 5', () => {
            expect(modulo(7, 5)).toBe(2);
        });

        it('returns the correct remainder for 1 modulo 5', () => {
            expect(modulo(1, 5)).toBe(1);
        });

        it('returns the correct remainder for 13 modulo 10', () => {
            expect(modulo(13, 10)).toBe(3);
        });

        it('returns 0 when the dividend is a multiple of the divisor', () => {
            expect(modulo(10, 5)).toBe(0);
        });
    });

    describe('with negative dividends', () => {
        it('returns a positive remainder for -1 modulo 5', () => {
            expect(modulo(-1, 5)).toBe(4); // (-1 % 5) would give -1
        });

        it('returns a positive remainder for -7 modulo 5', () => {
            expect(modulo(-7, 5)).toBe(3); // (-7 % 5) would give -2
        });

        it('returns a positive remainder for -10 modulo 3', () => {
            expect(modulo(-10, 3)).toBe(2);
        });
    });

    describe('with negative divisors', () => {
        it('returns -3 for 7 modulo -5', () => {
            expect(modulo(7, -5)).toBe(-3); // (7 % -5) is 2 -> ((2 + -5) % -5) is -3
        });

        it('returns -2 for -7 modulo -5', () => {
            expect(modulo(-7, -5)).toBe(-2); // (-7 % -5) is -2 -> ((-2 + -5) % -5) is -2
        });
    });
});
