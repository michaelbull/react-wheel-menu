import { renderHook } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import {
    Justify,
    Offset,
    Orientation,
    SliceState
} from '../models';
import { SliceStateContext } from './useSliceState';
import {
    describe,
    expect,
    it
} from 'vitest';
import {
    useLabelStyle,
    UseLabelStyleProps
} from './useLabelStyle';

/**
 * @vitest-environment jsdom
 */

describe('useLabelStyle', () => {
    it('translates vertically by the offset', () => {
        const { style } = setup({
            state: RIGHT_ANGLE,
            offset: 85
        });

        expect(style.transform).toBe('translateY(85px) rotate(-45deg)');
    });

    it('rotates downwards', () => {
        const { style } = setup({
            state: RIGHT_ANGLE,
            orientation: 'downwards'
        });

        expect(style.transform).toBe('translateY(0px) rotate(-45deg)');
    });

    it('rotates upwards', () => {
        const { style } = setup({
            state: RIGHT_ANGLE,
            orientation: 'upwards'
        });

        expect(style.transform).toBe('translateY(0px) rotate(135deg)');
    });

    it('rotates inwards', () => {
        const { style } = setup({
            state: RIGHT_ANGLE,
            orientation: 'inwards'
        });

        expect(style.transform).toBe('translateY(0px) rotate(0deg)');
    });

    it('rotates outwards', () => {
        const { style } = setup({
            state: RIGHT_ANGLE,
            orientation: 'outwards'
        });

        expect(style.transform).toBe('translateY(0px) rotate(180deg)');
    });

    it('rotates clockwise', () => {
        const { style } = setup({
            state: RIGHT_ANGLE,
            orientation: 'clockwise'
        });

        expect(style.transform).toBe('translateY(0px) rotate(270deg)');
    });

    it('rotates counterclockwise', () => {
        const { style } = setup({
            state: RIGHT_ANGLE,
            orientation: 'counterclockwise'
        });

        expect(style.transform).toBe('translateY(0px) rotate(90deg)');
    });

    it('justifies clockwise at the start of the slice', () => {
        const { style } = setup({
            state: RIGHT_ANGLE,
            orientation: 'clockwise',
            justify: 'start'
        });

        expect(style.justifyContent).toBe('flex-start');
    });

    it('justifies clockwise at the start of the slice', () => {
        const { style } = setup({
            state: RIGHT_ANGLE,
            orientation: 'clockwise',
            justify: 'center'
        });

        expect(style.justifyContent).toBe('center');
    });

    it('justifies clockwise at the start of the slice', () => {
        const { style } = setup({
            state: RIGHT_ANGLE,
            orientation: 'clockwise',
            justify: 'end'
        });

        expect(style.justifyContent).toBe('flex-end');
    });

    it('justifies counterclockwise at the start of the slice', () => {
        const { style } = setup({
            state: RIGHT_ANGLE,
            orientation: 'counterclockwise',
            justify: 'start'
        });

        expect(style.justifyContent).toBe('flex-end');
    });

    it('justifies counterclockwise at the center of the slice', () => {
        const { style } = setup({
            state: RIGHT_ANGLE,
            orientation: 'counterclockwise',
            justify: 'center'
        });

        expect(style.justifyContent).toBe('center');
    });

    it('justifies counterclockwise at the end of the slice', () => {
        const { style } = setup({
            state: RIGHT_ANGLE,
            orientation: 'counterclockwise',
            justify: 'end'
        });

        expect(style.justifyContent).toBe('flex-start');
    });
});

interface SetupProps {
    readonly state: SliceState;
    readonly orientation?: Orientation;
    readonly justify?: Justify;
    readonly offset?: Offset;
}

function setup(props: SetupProps) {
    const {
        state,
        orientation,
        justify,
        offset
    } = props;

    function Wrapper(props: PropsWithChildren) {
        return (
            <SliceStateContext.Provider value={state}>
                {props.children}
            </SliceStateContext.Provider>
        );
    }

    const initialProps: UseLabelStyleProps = {
        orientation,
        justify,
        offset
    };

    const { result } = renderHook(props => useLabelStyle(props), {
        wrapper: Wrapper,
        initialProps
    });

    return {
        style: result.current
    };
}

const RIGHT_ANGLE: SliceState = {
    from: 0,
    to: 90,
    angle: 90
};
