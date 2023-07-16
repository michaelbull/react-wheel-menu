import {
    describe,
    expect,
    it
} from 'vitest';
import { styleLabel } from './styleLabel';
import * as CSS from 'csstype';

describe('styleLabel', () => {
    it('styles a clockwise label the start of the slice', () => {
        const expected: CSS.Properties = {
            justifyContent: 'flex-start'
        };

        const actual = styleLabel('clockwise', 'start');

        expect(actual).toEqual(expected);
    });

    it('styles a clockwise label the center of the slice', () => {
        const expected: CSS.Properties = {
            justifyContent: 'center'
        };

        const actual = styleLabel('clockwise', 'center');

        expect(actual).toEqual(expected);
    });

    it('styles a clockwise label the end of the slice', () => {
        const expected: CSS.Properties = {
            justifyContent: 'flex-end'
        };

        const actual = styleLabel('clockwise', 'end');

        expect(actual).toEqual(expected);
    });

    it('styles a counterclockwise label the start of the slice', () => {
        const expected: CSS.Properties = {
            justifyContent: 'flex-end'
        };

        const actual = styleLabel('counterclockwise', 'start');

        expect(actual).toEqual(expected);
    });

    it('styles a counterclockwise label the center of the slice', () => {
        const expected: CSS.Properties = {
            justifyContent: 'center'
        };

        const actual = styleLabel('counterclockwise', 'center');

        expect(actual).toEqual(expected);
    });

    it('styles a counterclockwise label the end of the slice', () => {
        const expected: CSS.Properties = {
            justifyContent: 'flex-start'
        };

        const actual = styleLabel('counterclockwise', 'end');

        expect(actual).toEqual(expected);
    });
});
