import {
    describe,
    expect,
    it
} from 'vitest';
import { angleBetween } from './angle';

describe('angle', () => {
    it('returns the angle in radians between two right-angled points', () => {
        const actual = angleBetween(0, 0, 5, 5);
        expect(actual).toBe(0.7853981633974483);
    });

    it('returns the angle in radians between two vertical points', () => {
        const actual = angleBetween(0, 0, 0, 10);
        expect(actual).toBe(1.5707963267948966);
    });

    it('returns the angle in radians between two horizontal points', () => {
        const actual = angleBetween(0, 0, 10, 0);
        expect(actual).toBe(0);
    });
});
