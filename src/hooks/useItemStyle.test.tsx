import { renderHook } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import {
    Justify,
    Layout,
    SliceState
} from '../models';
import { SliceStateContext } from './useSliceState';
import {
    useItemStyle,
    UseItemStyleProps
} from './useItemStyle';
import {
    describe,
    expect,
    it
} from 'vitest';

/**
 * @vitest-environment jsdom
 */

describe('useItemStyle', () => {
    it('transforms an acute angle', () => {
        const { style } = setup({
            state: ACUTE_ANGLE
        });

        expect(style.transform).toBe('translateX(-50%) skew(30deg) rotate(60deg) translateY(50%)');
    });

    it('transforms an obtuse angle', () => {
        const { style } = setup({
            state: OBTUSE_ANGLE
        });

        expect(style.transform).toBe('translateX(-50%) skew(-30deg) rotate(30deg) translateY(50%)');
    });

    it('transforms a reflex angle', () => {
        const { style } = setup({
            state: REFLEX_ANGLE
        });

        expect(style.transform).toBe('translateX(-50%) skew(-110deg) rotate(-10deg) translateY(50%)');
    });

    it('lays out vertically at the start of the slice', () => {
        const { style } = setup({
            state: ACUTE_ANGLE,
            layout: 'vertical',
            justify: 'start'
        });

        expect(style.flexDirection).toBe('column-reverse');
        expect(style.justifyContent).toBe('flex-start');
    });

    it('lays out vertically at the center of the slice', () => {
        const { style } = setup({
            state: ACUTE_ANGLE,
            layout: 'vertical',
            justify: 'center'
        });

        expect(style.flexDirection).toBe('column-reverse');
        expect(style.justifyContent).toBe('center');
    });

    it('lays out vertically at the end of the slice', () => {
        const { style } = setup({
            state: ACUTE_ANGLE,
            layout: 'vertical',
            justify: 'end'
        });

        expect(style.flexDirection).toBe('column-reverse');
        expect(style.justifyContent).toBe('flex-end');
    });

    it('lays out horizontally at the start of the slice', () => {
        const { style } = setup({
            state: ACUTE_ANGLE,
            layout: 'horizontal',
            justify: 'start'
        });

        expect(style.flexDirection).toBe('row-reverse');
        expect(style.justifyContent).toBe('flex-end');
    });

    it('lays out horizontally at the center of the slice', () => {
        const { style } = setup({
            state: ACUTE_ANGLE,
            layout: 'horizontal',
            justify: 'center'
        });

        expect(style.flexDirection).toBe('row-reverse');
        expect(style.justifyContent).toBe('center');
    });

    it('lays out horizontally at the end of the slice', () => {
        const { style } = setup({
            state: ACUTE_ANGLE,
            layout: 'horizontal',
            justify: 'end'
        });

        expect(style.flexDirection).toBe('row-reverse');
        expect(style.justifyContent).toBe('flex-start');
    });
});

interface SetupProps {
    readonly state: SliceState;
    readonly layout?: Layout;
    readonly justify?: Justify;
}

function setup(props: SetupProps) {
    const {
        state,
        layout,
        justify
    } = props;

    function Wrapper(props: PropsWithChildren) {
        return (
            <SliceStateContext.Provider value={state}>
                {props.children}
            </SliceStateContext.Provider>
        );
    }

    const initialProps: UseItemStyleProps = {
        layout,
        justify
    };

    const { result } = renderHook(props => useItemStyle(props), {
        wrapper: Wrapper,
        initialProps
    });

    return {
        style: result.current
    };
}

const ACUTE_ANGLE: SliceState = {
    from: 330,
    to: 30,
    angle: 60
};

const OBTUSE_ANGLE: SliceState = {
    from: 0,
    to: 120,
    angle: 120
};

const REFLEX_ANGLE: SliceState = {
    from: 0,
    to: 200,
    angle: 200
};
