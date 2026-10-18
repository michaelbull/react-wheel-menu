import {
    describe,
    expect,
    it,
} from 'vitest';
import type { PointerBearing } from '../pointer/PointerBearing';
import { activeSegment } from './activeSegment';
import type { SelectableSegment } from './SelectableSegment';

const WHOLE_WHEEL: readonly SelectableSegment[] = [
    { value: 'north', from: 315, to: 405, ring: { inner: 0, outer: 1 } },
    { value: 'east', from: 45, to: 135, ring: { inner: 0, outer: 1 } },
    { value: 'south', from: 135, to: 225, ring: { inner: 0, outer: 1 } },
    { value: 'west', from: 225, to: 315, ring: { inner: 0, outer: 1 } },
];

const TWO_RINGS: readonly SelectableSegment[] = [
    { value: 'near-east', from: 0, to: 180, ring: { inner: 0.25, outer: 0.6 } },
    { value: 'near-west', from: 180, to: 360, ring: { inner: 0.25, outer: 0.6 } },
    { value: 'far-east', from: 0, to: 180, ring: { inner: 0.6, outer: 1 } },
    { value: 'far-west', from: 180, to: 360, ring: { inner: 0.6, outer: 1 } },
];

function pointerAt(degrees: number, share: number): PointerBearing {
    return {
        degrees,
        distancePixels: share * 100,
        radiusPixels: 100,
    };
}

describe('activeSegment', () => {
    it('returns the segment in the direction of the pointer', () => {
        expect(activeSegment(WHOLE_WHEEL, pointerAt(90, 0.5), 0)).toBe('east');
    });

    it('returns the segment across north for north', () => {
        expect(activeSegment(WHOLE_WHEEL, pointerAt(0, 0.5), 0)).toBe('north');
    });

    it('returns the segment in the direction of a pointer past the edge', () => {
        expect(activeSegment(WHOLE_WHEEL, pointerAt(180, 3), 0)).toBe('south');
    });

    it('returns null inside the dead zone', () => {
        expect(activeSegment(WHOLE_WHEEL, pointerAt(90, 0.1), 0.2)).toBeNull();
    });

    it('returns null at the edge of the dead zone', () => {
        expect(activeSegment(WHOLE_WHEEL, pointerAt(90, 0.2), 0.2)).toBeNull();
    });

    it('returns the segment just past the dead zone', () => {
        expect(activeSegment(WHOLE_WHEEL, pointerAt(90, 0.21), 0.2)).toBe('east');
    });

    it('returns null at the centre with no dead zone', () => {
        expect(activeSegment(WHOLE_WHEEL, pointerAt(90, 0), 0)).toBeNull();
    });

    it('returns null for a wheel with no radius', () => {
        const pointer: PointerBearing = {
            degrees: 90,
            distancePixels: 10,
            radiusPixels: 0,
        };

        expect(activeSegment(WHOLE_WHEEL, pointer, 0)).toBeNull();
    });

    it('returns null where there are no segments', () => {
        expect(activeSegment([], pointerAt(90, 0.5), 0)).toBeNull();
    });

    it('returns the segment of the inner ring for a short distance', () => {
        expect(activeSegment(TWO_RINGS, pointerAt(90, 0.4), 0)).toBe('near-east');
    });

    it('returns the segment of the outer ring for a long distance', () => {
        expect(activeSegment(TWO_RINGS, pointerAt(270, 0.8), 0)).toBe('far-west');
    });

    it('returns the segment of the outer ring at the radius the rings share', () => {
        expect(activeSegment(TWO_RINGS, pointerAt(90, 0.6), 0)).toBe('far-east');
    });

    it('returns the segment of the outermost ring past the edge', () => {
        expect(activeSegment(TWO_RINGS, pointerAt(90, 2), 0)).toBe('far-east');
    });

    it('returns null in the hole of the innermost ring', () => {
        expect(activeSegment(TWO_RINGS, pointerAt(90, 0.1), 0)).toBeNull();
    });
});
