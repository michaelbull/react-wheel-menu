import {
    describe,
    expect,
    it,
} from 'vitest';
import { radiansBetween } from './radiansBetween';

describe('radiansBetween', () => {
    describe('when calculating from the origin (0,0)', () => {
        it('returns 0 radians for a point directly to the east', () => {
            expect(radiansBetween(0, 0, 10, 0)).toBe(0);
        });

        it('returns PI/2 radians for a point directly to the north', () => {
            expect(radiansBetween(0, 0, 0, 10)).toBeCloseTo(Math.PI / 2);
        });

        it('returns PI radians for a point directly to the west', () => {
            expect(radiansBetween(0, 0, -10, 0)).toBeCloseTo(Math.PI);
        });

        it('returns -PI/2 radians for a point directly to the south', () => {
            expect(radiansBetween(0, 0, 0, -10)).toBeCloseTo(-Math.PI / 2);
        });

        it('returns PI/4 radians for a point at a 45-degree angle', () => {
            expect(radiansBetween(0, 0, 10, 10)).toBeCloseTo(Math.PI / 4);
        });
    });

    describe('when calculating between two non-origin points', () => {
        it('returns 0 radians for a horizontal line segment', () => {
            expect(radiansBetween(5, 5, 15, 5)).toBe(0);
        });

        it('returns PI/2 radians for a vertical line segment', () => {
            expect(radiansBetween(5, 5, 5, 15)).toBeCloseTo(Math.PI / 2);
        });

        it('returns PI radians for a horizontal line segment pointing west', () => {
            expect(radiansBetween(15, 5, 5, 5)).toBeCloseTo(Math.PI);
        });
    });
});
