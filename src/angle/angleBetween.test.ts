import {
    describe,
    expect,
    it
} from 'vitest';
import { angleBetween } from './angleBetween';

describe('angleBetween', () => {
    it('returns the angle in radians between two points at a right angle', () => {
        const actual = angleBetween(0, 0, 5, 5);
        expect(actual).toBe(0.7853981633974483);
    });

    it('returns the angle in radians between two points on a vertical plane', () => {
        const actual = angleBetween(0, 0, 0, 10);
        expect(actual).toBe(1.5707963267948966);
    });

    it('returns the angle in radians between two points on a horizontal plane', () => {
        const actual = angleBetween(0, 0, 10, 0);
        expect(actual).toBe(0);
    });
});
