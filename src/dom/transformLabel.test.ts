import {
    describe,
    expect,
    it
} from 'vitest';
import { transformLabel } from './transformLabel';
import { SliceState } from '../models';

describe('transformLabel', () => {
    const SLICE: SliceState = {
        from: 0,
        to: 90,
        angle: 90
    };

    it('translates vertically by the offset', () => {
        const actual = transformLabel(SLICE, 'downwards', 85);
        expect(actual).toBe('translateY(85px) rotate(-45deg)');
    });
});
