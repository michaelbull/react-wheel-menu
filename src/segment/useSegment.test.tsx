/**
 * @vitest-environment jsdom
 */
import { renderHook } from '@testing-library/react';
import type { PropsWithChildren } from 'react';
import {
    describe,
    expect,
    it,
} from 'vitest';
import { WheelActiveContext } from '../selection/useWheelActive';
import { useSegment } from './useSegment';

describe('useSegment', () => {
    it('normalises from into the state', () => {
        const { result } = renderHook(() => {
            return useSegment({ from: 370, to: 400 });
        });

        expect(result.current.state.from).toBe(10);
    });

    it('takes the span from from to to as the magnitude', () => {
        const { result } = renderHook(() => {
            return useSegment({ from: '45deg', to: '0.25turn' });
        });

        expect(result.current.state.magnitude).toBe(45);
    });

    it('takes the span across north as the magnitude', () => {
        const { result } = renderHook(() => {
            return useSegment({ from: 315, to: 45 });
        });

        expect(result.current.state.magnitude).toBe(90);
    });

    it('caps the magnitude at 150 degrees', () => {
        const { result } = renderHook(() => {
            return useSegment({ from: 0, to: 200 });
        });

        expect(result.current.state.magnitude).toBe(150);
    });

    it('adds the segment class to the class name', () => {
        const { result } = renderHook(() => {
            return useSegment({ className: 'custom', from: 0, to: 90 });
        });

        expect(result.current.className).toBe('custom wheel-segment');
    });

    it('puts the transform of the style after its own', () => {
        const { result } = renderHook(() => {
            return useSegment({ from: 0, to: 60, style: { transform: 'scale(2)' } });
        });

        expect(result.current.style.transform).toBe('rotate(-30deg) skew(-30deg) scale(2)');
    });

    it('marks the segment as active when the wheel names its value', () => {
        function wrapper(props: PropsWithChildren) {
            return <WheelActiveContext.Provider value="east">{props.children}</WheelActiveContext.Provider>;
        }

        const { result } = renderHook(() => {
            return useSegment({ from: 0, to: 90, value: 'east' });
        }, { wrapper });

        expect(result.current['data-active']).toBe('');
    });

    it('does not mark the segment as active when the wheel names another value', () => {
        function wrapper(props: PropsWithChildren) {
            return <WheelActiveContext.Provider value="west">{props.children}</WheelActiveContext.Provider>;
        }

        const { result } = renderHook(() => {
            return useSegment({ from: 0, to: 90, value: 'east' });
        }, { wrapper });

        expect(result.current['data-active']).toBeUndefined();
    });

    it('does not mark a segment with no value as active', () => {
        function wrapper(props: PropsWithChildren) {
            return <WheelActiveContext.Provider value="east">{props.children}</WheelActiveContext.Provider>;
        }

        const { result } = renderHook(() => {
            return useSegment({ from: 0, to: 90 });
        }, { wrapper });

        expect(result.current['data-active']).toBeUndefined();
    });
});
