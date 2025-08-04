import {
    describe,
    expect,
    it,
} from 'vitest';
import { rotateLabel } from './rotateLabel';

describe('rotateLabel', () => {
    describe('when orientation is "downwards"', () => {
        it('returns the negated angle for a positive angle', () => {
            expect(rotateLabel('downwards', 90)).toBe(-90);
        });

        it('returns the negated angle for a negative angle', () => {
            expect(rotateLabel('downwards', -45)).toBe(45);
        });

        it('returns 0 for an angle of 0', () => {
            expect(rotateLabel('downwards', 0)).toBeCloseTo(0);
        });
    });

    describe('when orientation is "upwards"', () => {
        it('returns 180 minus the angle for a positive angle', () => {
            expect(rotateLabel('upwards', 90)).toBe(90);
        });

        it('returns 180 minus the angle for a negative angle', () => {
            expect(rotateLabel('upwards', -45)).toBe(225);
        });

        it('returns 180 for an angle of 0', () => {
            expect(rotateLabel('upwards', 0)).toBe(180);
        });
    });

    describe('when orientation is "inwards"', () => {
        it('returns 0 for a positive angle', () => {
            expect(rotateLabel('inwards', 90)).toBe(0);
        });

        it('returns 0 for a negative angle', () => {
            expect(rotateLabel('inwards', -123)).toBe(0);
        });
    });

    describe('when orientation is "outwards"', () => {
        it('returns 180 for a positive angle', () => {
            expect(rotateLabel('outwards', 45)).toBe(180);
        });

        it('returns 180 for a negative angle', () => {
            expect(rotateLabel('outwards', -900)).toBe(180);
        });
    });

    describe('when orientation is "clockwise"', () => {
        it('returns 270 for a positive angle', () => {
            expect(rotateLabel('clockwise', 60)).toBe(270);
        });

        it('returns 270 for a negative angle', () => {
            expect(rotateLabel('clockwise', -180)).toBe(270);
        });
    });

    describe('when orientation is "counterclockwise"', () => {
        it('returns 90 for a positive angle', () => {
            expect(rotateLabel('counterclockwise', 120)).toBe(90);
        });

        it('returns 90 for a negative angle', () => {
            expect(rotateLabel('counterclockwise', -30)).toBe(90);
        });
    });
});
