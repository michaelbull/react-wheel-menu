import {
    describe,
    expect,
    it
} from 'vitest';
import { modulo } from './modulo';

describe('modulo', () => {
    it('returns 0 when the dividend is 0', () => {
        const actual = modulo(0, 360);
        expect(actual).toBe(0);
    });

    it('returns the dividend when the dividend is the same as the divisor', () => {
        const actual = modulo(360, 360);
        expect(actual).toBe(360);
    });

    it('returns the dividend when the dividend is smaller than the divisor', () => {
        const actual = modulo(200, 360);
        expect(actual).toBe(200);
    });

    it('returns the modulo when the dividend is greater than the divisor', () => {
        const actual = modulo(500, 360);
        expect(actual).toBe(140);
    });

    it('returns 0 when the dividend is twice the divisor', () => {
        const actual = modulo(720, 360);
        expect(actual).toBe(0);
    });

    it('returns a positive number if the divisor is positive', () => {
        const actual = modulo(-100, 360);
        expect(actual).toBe(260);
    });

    it('returns a negative number if the divisor is negative', () => {
        const actual = modulo(220, -360);
        expect(actual).toBe(-140);
    });
});
