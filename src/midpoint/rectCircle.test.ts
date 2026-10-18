import {
    describe,
    expect,
    it,
} from 'vitest';
import type { Rect } from './rectMidpoint';
import { rectCircle } from './rectCircle';

describe('rectCircle', () => {
    it('centres the circle on the midpoint of the rect', () => {
        const rect: Rect = {
            x: 50,
            y: 100,
            width: 200,
            height: 200,
        };

        expect(rectCircle(rect).midpoint).toEqual([150, 200]);
    });

    it('takes half the width of the rect as the radius', () => {
        const rect: Rect = {
            x: 50,
            y: 100,
            width: 200,
            height: 200,
        };

        expect(rectCircle(rect).radiusPixels).toBe(100);
    });
});
