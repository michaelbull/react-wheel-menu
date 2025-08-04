import {
    describe,
    expect,
    it,
} from 'vitest';
import { rectMidpoint } from './rectMidpoint';

describe('rectMidpoint', () => {
    it('returns the correct midpoint for a rectangle at the origin', () => {
        const rect = {
            x: 0,
            y: 0,
            width: 200,
            height: 100,
        };

        expect(rectMidpoint(rect)).toEqual([100, 50]);
    });

    it('returns the correct midpoint for a rectangle with positive coordinates', () => {
        const rect = {
            x: 50,
            y: 50,
            width: 100,
            height: 100,
        };

        expect(rectMidpoint(rect)).toEqual([100, 100]);
    });

    it('returns the correct midpoint for a rectangle with negative coordinates', () => {
        const rect = {
            x: -100,
            y: -200,
            width: 100,
            height: 100,
        };

        expect(rectMidpoint(rect)).toEqual([-50, -150]);
    });

    it('returns the top-left corner when width and height are 0', () => {
        const rect = {
            x: 75,
            y: 75,
            width: 0,
            height: 0,
        };

        expect(rectMidpoint(rect)).toEqual([75, 75]);
    });
});
