import {
    describe,
    expect,
    it,
} from 'vitest';
import type { SegmentState } from './SegmentState';
import { transformSegment } from './transformSegment';

describe('transformSegment', () => {
    describe('when no initial transform is provided', () => {
        it('returns the full transformation string for a standard state', () => {
            const state: SegmentState = {
                from: 45,
                to: 105,
                magnitude: 60,
                gapBefore: 10,
                gapAfter: 20,
            };

            const actual = transformSegment(state);
            const expected = 'rotate(15deg) skew(-30deg) translate(10px, -20px)';

            expect(actual).toBe(expected);
        });

        it('returns the correct string when gaps are strings', () => {
            const state: SegmentState = {
                from: 45,
                to: 105,
                magnitude: 60,
                gapBefore: '1rem',
                gapAfter: '2rem',
            };

            const actual = transformSegment(state);
            const expected = 'rotate(15deg) skew(-30deg) translate(1rem, -2rem)';

            expect(actual).toBe(expected);
        });

        it('omits rotate when its angle is 0', () => {
            const state: SegmentState = {
                from: 45,
                to: 90,
                magnitude: 45,
                gapBefore: 10,
                gapAfter: 10,
            };

            const actual = transformSegment(state);
            const expected = 'skew(-45deg) translate(10px, -10px)';

            expect(actual).toBe(expected);
        });

        it('omits skew when its angle is 0', () => {
            const state: SegmentState = {
                from: 0,
                to: 90,
                magnitude: 90,
                gapBefore: 10,
                gapAfter: 10,
            };

            const actual = transformSegment(state);
            const expected = 'translate(10px, -10px)';

            expect(actual).toBe(expected);
        });

        it('returns only translateX for gap when only gapBefore is provided', () => {
            const state: SegmentState = {
                from: 45,
                to: 105,
                magnitude: 60,
                gapBefore: 10,
            };

            const actual = transformSegment(state);
            const expected = 'rotate(15deg) skew(-30deg) translateX(10px)';

            expect(actual).toBe(expected);
        });

        it('returns only translateY for gap when only gapAfter is provided', () => {
            const state: SegmentState = {
                from: 45,
                to: 105,
                magnitude: 60,
                gapAfter: 20,
            };

            const actual = transformSegment(state);
            const expected = 'rotate(15deg) skew(-30deg) translateY(-20px)';

            expect(actual).toBe(expected);
        });

        it('omits translate when no gaps are provided', () => {
            const state: SegmentState = {
                from: 45,
                to: 105,
                magnitude: 60,
            };

            const actual = transformSegment(state);
            const expected = 'rotate(15deg) skew(-30deg)';

            expect(actual).toBe(expected);
        });
    });

    describe('when an initial transform is provided', () => {
        it('appends the initial transform to the end of the full string', () => {
            const state: SegmentState = {
                from: 45,
                to: 105,
                magnitude: 60,
                gapBefore: 10,
                gapAfter: 20,
            };

            const initialTransform = 'scale(1.1)';

            const actual = transformSegment(state, initialTransform);
            const expected = 'rotate(15deg) skew(-30deg) translate(10px, -20px) scale(1.1)';

            expect(actual).toBe(expected);
        });

        it('appends the initial transform when other parts are omitted', () => {
            const state: SegmentState = {
                from: 0,
                to: 90,
                magnitude: 90,
            };

            const initialTransform = 'opacity(0.8)';

            const actual = transformSegment(state, initialTransform);
            const expected = 'opacity(0.8)';

            expect(actual).toBe(expected);
        });
    });
});
