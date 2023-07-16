import {
    describe,
    expect,
    it
} from 'vitest';
import { SliceState } from '../models';
import { rotateLabel } from './rotateLabel';

describe('rotateLabel', () => {
    const SLICE: SliceState = {
        from: 0,
        to: 90,
        angle: 90
    };

    it('rotates downwards', () => {
        expect(rotateLabel(SLICE, 'downwards')).toBe(-45);
    });

    it('rotates upwards', () => {
        expect(rotateLabel(SLICE, 'upwards')).toBe(135);
    });

    it('rotates inwards', () => {
        expect(rotateLabel(SLICE, 'inwards')).toBe(0);
    });

    it('rotates outwards', () => {
        expect(rotateLabel(SLICE, 'outwards')).toBe(180);
    });

    it('rotates clockwise', () => {
        expect(rotateLabel(SLICE, 'clockwise')).toBe(270);
    });

    it('rotates counterclockwise', () => {
        expect(rotateLabel(SLICE, 'counterclockwise')).toBe(90);
    });
});
