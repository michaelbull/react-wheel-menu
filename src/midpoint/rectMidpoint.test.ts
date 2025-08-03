import {
    describe,
    expect,
    it,
} from 'vitest';
import {
    type Rect,
    rectMidpoint,
} from './rectMidpoint';

describe('rectMidpoint', () => {
    it('returns the middle x coordinate', () => {
        const rect: Rect = {
            x: 100,
            y: 0,
            width: 200,
            height: 0,
        };

        const midpoint = rectMidpoint(rect);
        const x = midpoint[0];

        expect(x).toBe(200);
    });

    it('returns the middle y coordinate', () => {
        const rect: Rect = {
            x: 0,
            y: 300,
            width: 0,
            height: 1000,
        };

        const midpoint = rectMidpoint(rect);
        const y = midpoint[1];

        expect(y).toBe(800);
    });
});
