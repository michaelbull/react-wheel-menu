import {
    describe,
    expect,
    it
} from 'vitest';
import { layoutItem } from './layoutItem';
import * as CSS from 'csstype';

describe('layoutItem', () => {
    it('lays out vertically at the start of the slice', () => {
        const expected: CSS.Properties = {
            flexDirection: 'column-reverse',
            justifyContent: 'flex-start'
        };

        const actual = layoutItem('vertical', 'start');

        expect(actual).toEqual(expected);
    });

    it('lays out vertically at the center of the slice', () => {
        const expected: CSS.Properties = {
            flexDirection: 'column-reverse',
            justifyContent: 'center'
        };

        const actual = layoutItem('vertical', 'center');

        expect(actual).toEqual(expected);
    });

    it('lays out vertically at the end of the slice', () => {
        const expected: CSS.Properties = {
            flexDirection: 'column-reverse',
            justifyContent: 'flex-end'
        };

        const actual = layoutItem('vertical', 'end');

        expect(actual).toEqual(expected);
    });

    it('lays out horizontally at the start of the slice', () => {
        const expected: CSS.Properties = {
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end'
        };

        const actual = layoutItem('horizontal', 'start');

        expect(actual).toEqual(expected);
    });

    it('lays out horizontally at the center of the slice', () => {
        const expected: CSS.Properties = {
            flexDirection: 'row-reverse',
            justifyContent: 'center'
        };

        const actual = layoutItem('horizontal', 'center');

        expect(actual).toEqual(expected);
    });

    it('lays out horizontally at the end of the slice', () => {
        const expected: CSS.Properties = {
            flexDirection: 'row-reverse',
            justifyContent: 'flex-start'
        };

        const actual = layoutItem('horizontal', 'end');

        expect(actual).toEqual(expected);
    });
});
