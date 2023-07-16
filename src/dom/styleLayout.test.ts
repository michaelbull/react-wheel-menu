import {
    describe,
    expect,
    it
} from 'vitest';
import { styleLayout } from './styleLayout';
import * as CSS from 'csstype';

describe('styleLayout', () => {
    it('styles a vertical layout at the start of the slice', () => {
        const expected: CSS.Properties = {
            flexDirection: 'column-reverse',
            justifyContent: 'flex-start'
        };

        const actual = styleLayout('vertical', 'start');

        expect(actual).toEqual(expected);
    });

    it('styles a vertical layout at the center of the slice', () => {
        const expected: CSS.Properties = {
            flexDirection: 'column-reverse',
            justifyContent: 'center'
        };

        const actual = styleLayout('vertical', 'center');

        expect(actual).toEqual(expected);
    });

    it('styles a vertical layout at the end of the slice', () => {
        const expected: CSS.Properties = {
            flexDirection: 'column-reverse',
            justifyContent: 'flex-end'
        };

        const actual = styleLayout('vertical', 'end');

        expect(actual).toEqual(expected);
    });

    it('styles a horizontal layout at the start of the slice', () => {
        const expected: CSS.Properties = {
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end'
        };

        const actual = styleLayout('horizontal', 'start');

        expect(actual).toEqual(expected);
    });

    it('styles a horizontal layout at the center of the slice', () => {
        const expected: CSS.Properties = {
            flexDirection: 'row-reverse',
            justifyContent: 'center'
        };

        const actual = styleLayout('horizontal', 'center');

        expect(actual).toEqual(expected);
    });

    it('styles a horizontal layout at the end of the slice', () => {
        const expected: CSS.Properties = {
            flexDirection: 'row-reverse',
            justifyContent: 'flex-start'
        };

        const actual = styleLayout('horizontal', 'end');

        expect(actual).toEqual(expected);
    });
});
