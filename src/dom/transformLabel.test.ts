import {
    describe,
    expect,
    it
} from 'vitest';
import { transformLabel } from './transformLabel';

describe('transformLabel', () => {
    it('translates vertically by the offset', () => {
        const actual = transformLabel(45, 'downwards', 85);
        expect(actual).toBe('translateY(85px) rotate(-45deg)');
    });
});
