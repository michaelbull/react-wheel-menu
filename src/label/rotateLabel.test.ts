import {
    describe,
    expect,
    it,
} from 'vitest';
import { rotateLabel } from './rotateLabel';

describe('rotateLabel', () => {
    describe('when orientation is "downwards"', () => {
        it('returns the negated angle for a positive angle', () => {
            expect(rotateLabel(90, 'downwards')).toBe(-90);
        });

        it('returns the negated angle for a negative angle', () => {
            expect(rotateLabel(-45, 'downwards')).toBe(45);
        });

        it('returns 0 for an angle of 0', () => {
            expect(rotateLabel(0, 'downwards')).toBeCloseTo(0);
        });
    });

    describe('when orientation is "upwards"', () => {
        it('returns 180 minus the angle for a positive angle', () => {
            expect(rotateLabel(90, 'upwards')).toBe(90);
        });

        it('returns 180 minus the angle for a negative angle', () => {
            expect(rotateLabel(-45, 'upwards')).toBe(225);
        });

        it('returns 180 for an angle of 0', () => {
            expect(rotateLabel(0, 'upwards')).toBe(180);
        });
    });

    describe('when orientation is "inwards"', () => {
        it('returns 0 for a positive angle', () => {
            expect(rotateLabel(90, 'inwards')).toBe(0);
        });

        it('returns 0 for a negative angle', () => {
            expect(rotateLabel(-123, 'inwards')).toBe(0);
        });
    });

    describe('when orientation is "outwards"', () => {
        it('returns 180 for a positive angle', () => {
            expect(rotateLabel(45, 'outwards')).toBe(180);
        });

        it('returns 180 for a negative angle', () => {
            expect(rotateLabel(-900, 'outwards')).toBe(180);
        });
    });

    describe('when orientation is "clockwise"', () => {
        it('returns 270 for a positive angle', () => {
            expect(rotateLabel(60, 'clockwise')).toBe(270);
        });

        it('returns 270 for a negative angle', () => {
            expect(rotateLabel(-180, 'clockwise')).toBe(270);
        });
    });

    describe('when orientation is "counterclockwise"', () => {
        it('returns 90 for a positive angle', () => {
            expect(rotateLabel(120, 'counterclockwise')).toBe(90);
        });

        it('returns 90 for a negative angle', () => {
            expect(rotateLabel(-30, 'counterclockwise')).toBe(90);
        });
    });
});
