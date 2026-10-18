import {
    describe,
    expect,
    it,
} from 'vitest';
import { pointerDegrees } from './pointerDegrees';

describe('pointerDegrees', () => {
    it('returns 0 for a point to the north', () => {
        expect(pointerDegrees([100, 100], [100, 0])).toBeCloseTo(0);
    });

    it('returns 45 for a point to the north-east', () => {
        expect(pointerDegrees([100, 100], [200, 0])).toBeCloseTo(45);
    });

    it('returns 90 for a point to the east', () => {
        expect(pointerDegrees([100, 100], [200, 100])).toBeCloseTo(90);
    });

    it('returns 135 for a point to the south-east', () => {
        expect(pointerDegrees([100, 100], [200, 200])).toBeCloseTo(135);
    });

    it('returns 180 for a point to the south', () => {
        expect(pointerDegrees([100, 100], [100, 200])).toBeCloseTo(180);
    });

    it('returns 225 for a point to the south-west', () => {
        expect(pointerDegrees([100, 100], [0, 200])).toBeCloseTo(225);
    });

    it('returns 270 for a point to the west', () => {
        expect(pointerDegrees([100, 100], [0, 100])).toBeCloseTo(270);
    });

    it('returns 315 for a point to the north-west', () => {
        expect(pointerDegrees([100, 100], [0, 0])).toBeCloseTo(315);
    });
});
