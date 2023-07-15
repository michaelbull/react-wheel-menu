import {
    describe,
    expect,
    it
} from 'vitest';
import { transformLabel } from './transformLabel';
import { SliceState } from '../models';

describe('transformLabel', () => {
    it('translates vertically by the offset', () => {
        const actual = transformLabel(SLICE, 'downwards', 85);
        expect(actual).toBe('translateY(85px) rotate(-45deg)');
    });

    it('rotates downwards', () => {
        const actual = transformLabel(SLICE, 'downwards', 0);
        expect(actual).toBe('translateY(0px) rotate(-45deg)');
    });

    it('rotates upwards', () => {
        const actual = transformLabel(SLICE, 'upwards', 0);
        expect(actual).toBe('translateY(0px) rotate(135deg)');
    });

    it('rotates inwards', () => {
        const actual = transformLabel(SLICE, 'inwards', 0);
        expect(actual).toBe('translateY(0px) rotate(0deg)');
    });

    it('rotates outwards', () => {
        const actual = transformLabel(SLICE, 'outwards', 0);
        expect(actual).toBe('translateY(0px) rotate(180deg)');
    });

    it('rotates clockwise', () => {
        const actual = transformLabel(SLICE, 'clockwise', 0);
        expect(actual).toBe('translateY(0px) rotate(270deg)');
    });

    it('rotates counterclockwise', () => {
        const actual = transformLabel(SLICE, 'counterclockwise', 0);
        expect(actual).toBe('translateY(0px) rotate(90deg)');
    });
});

const SLICE: SliceState = {
    from: 0,
    to: 90,
    angle: 90
};
