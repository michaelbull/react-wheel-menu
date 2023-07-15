import {
    describe,
    expect,
    it
} from 'vitest';
import { orientLabel } from './orientLabel';
import * as CSS from 'csstype';

describe('orientLabel', () => {
    it('justifies clockwise at the start of the slice', () => {
        const expected: CSS.Properties = {
            justifyContent: 'flex-start'
        };

        const actual = orientLabel('clockwise', 'start');

        expect(actual).toEqual(expected);
    });

    it('justifies clockwise at the start of the slice', () => {
        const expected: CSS.Properties = {
            justifyContent: 'center'
        };

        const actual = orientLabel('clockwise', 'center');

        expect(actual).toEqual(expected);
    });

    it('justifies clockwise at the start of the slice', () => {
        const expected: CSS.Properties = {
            justifyContent: 'flex-end'
        };

        const actual = orientLabel('clockwise', 'end');

        expect(actual).toEqual(expected);
    });

    it('justifies counterclockwise at the start of the slice', () => {
        const expected: CSS.Properties = {
            justifyContent: 'flex-end'
        };

        const actual = orientLabel('counterclockwise', 'start');

        expect(actual).toEqual(expected);
    });

    it('justifies counterclockwise at the center of the slice', () => {
        const expected: CSS.Properties = {
            justifyContent: 'center'
        };

        const actual = orientLabel('counterclockwise', 'center');

        expect(actual).toEqual(expected);
    });

    it('justifies counterclockwise at the end of the slice', () => {
        const expected: CSS.Properties = {
            justifyContent: 'flex-start'
        };

        const actual = orientLabel('counterclockwise', 'end');

        expect(actual).toEqual(expected);
    });
});
