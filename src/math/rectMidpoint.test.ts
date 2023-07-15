import {
    describe,
    expect,
    it
} from 'vitest';
import { rectMidpoint } from './rectMidpoint';

describe('rectMidpoint', () => {
    it('returns the middle x coordinate', () => {
        const rect = {
            x: 100,
            y: 0,
            width: 200,
            height: 0
        } as DOMRect;

        const [actual] = rectMidpoint(rect);
        expect(actual).toBe(200);
    });

    it('returns the middle y coordinate', () => {
        const rect = {
            x: 0,
            y: 300,
            width: 0,
            height: 1000
        } as DOMRect;

        const [, actual] = rectMidpoint(rect);
        expect(actual).toBe(800);
    });
});
