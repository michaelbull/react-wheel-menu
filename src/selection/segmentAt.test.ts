import {
    describe,
    expect,
    it,
} from 'vitest';
import { segmentAt } from './segmentAt';
import type { SegmentSpan } from './SegmentSpan';

const COMPASS: readonly SegmentSpan[] = [
    { value: 'n', from: 337.5, to: 22.5 },
    { value: 'ne', from: 22.5, to: 67.5 },
    { value: 'e', from: 67.5, to: 112.5 },
    { value: 'se', from: 112.5, to: 157.5 },
    { value: 's', from: 157.5, to: 202.5 },
    { value: 'sw', from: 202.5, to: 247.5 },
    { value: 'w', from: 247.5, to: 292.5 },
    { value: 'nw', from: 292.5, to: 337.5 },
];

function holdersOf(segments: readonly SegmentSpan[], degrees: number): readonly SegmentSpan[] {
    return segments.filter(segment => segmentAt([segment], degrees) !== null);
}

describe('segmentAt', () => {
    it('returns the segment across north for north', () => {
        expect(segmentAt(COMPASS, 0)?.value).toBe('n');
    });

    it('returns the segment that holds a direction', () => {
        expect(segmentAt(COMPASS, 100)?.value).toBe('e');
    });

    it('returns the later segment for a shared boundary', () => {
        expect(segmentAt(COMPASS, 22.5)?.value).toBe('ne');
    });

    it('returns exactly one segment for every direction in a full circle of eight', () => {
        const counts = Array.from({ length: 720 }, (_, index) => holdersOf(COMPASS, index / 2).length);
        expect(counts.every(count => count === 1)).toBe(true);
    });

    it('returns null for a direction in a gap between segments', () => {
        const segments: readonly SegmentSpan[] = [
            { value: 'a', from: 0, to: 80 },
            { value: 'b', from: 100, to: 180 },
        ];

        expect(segmentAt(segments, 90)).toBeNull();
    });

    it('returns null where there are no segments', () => {
        expect(segmentAt([], 90)).toBeNull();
    });
});
