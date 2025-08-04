import {
    describe,
    expect,
    it,
} from 'vitest';
import { moduloDegrees } from './moduloDegrees';

describe('moduloDegrees', () => {
    describe('with positive degrees', () => {
        it('returns the same value for degrees under 360', () => {
            expect(moduloDegrees(90)).toBe(90);
        });

        it('returns the correct normalized value for degrees over 360', () => {
            expect(moduloDegrees(450)).toBe(90);
        });

        it('returns 719 degrees normalized to 359', () => {
            expect(moduloDegrees(719)).toBe(359);
        });
    });

    describe('with negative degrees', () => {
        it('returns the correct positive angle for -90 degrees', () => {
            expect(moduloDegrees(-90)).toBe(270);
        });

        it('returns the correct positive angle for -450 degrees', () => {
            expect(moduloDegrees(-450)).toBe(270);
        });
    });

    describe('with edge case values', () => {
        it('returns 0 for 0 degrees', () => {
            expect(moduloDegrees(0)).toBe(0);
        });

        it('returns 360 for 360 degrees', () => {
            expect(moduloDegrees(360)).toBe(360);
        });
    });
});
