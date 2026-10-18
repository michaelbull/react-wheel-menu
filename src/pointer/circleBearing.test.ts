import {
    describe,
    expect,
    it,
} from 'vitest';
import type { Circle } from '../midpoint/Circle';
import { circleBearing } from './circleBearing';

describe('circleBearing', () => {
    it('returns the direction from the centre of the circle', () => {
        const circle: Circle = {
            midpoint: [100, 100],
            radiusPixels: 50,
        };

        expect(circleBearing(circle, [200, 100]).degrees).toBeCloseTo(90);
    });

    it('returns the distance from the centre of the circle', () => {
        const circle: Circle = {
            midpoint: [100, 100],
            radiusPixels: 50,
        };

        expect(circleBearing(circle, [200, 100]).distancePixels).toBe(100);
    });

    it('returns the radius of the circle', () => {
        const circle: Circle = {
            midpoint: [100, 100],
            radiusPixels: 50,
        };

        expect(circleBearing(circle, [200, 100]).radiusPixels).toBe(50);
    });
});
