import {
    describe,
    expect,
    it,
} from 'vitest';
import { pointerDistance } from './pointerDistance';

describe('pointerDistance', () => {
    it('returns 0 for a point at the midpoint', () => {
        expect(pointerDistance([100, 100], [100, 100])).toBe(0);
    });

    it('returns the distance to a point on an axis', () => {
        expect(pointerDistance([100, 100], [100, 40])).toBe(60);
    });

    it('returns the distance to a point off the axes', () => {
        expect(pointerDistance([0, 0], [30, 40])).toBe(50);
    });
});
