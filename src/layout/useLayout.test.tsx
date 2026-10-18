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
import type { RingState } from '../ring/RingState';
import { RingStateContext } from '../ring/useRingState';
import type { SegmentState } from '../segment/SegmentState';
import { SegmentStateContext } from '../segment/useSegmentState';
import { useLayout } from './useLayout';

describe('useLayout', () => {
    it('adds the classes of the default direction and justification', () => {
        const { result } = renderHook(() => {
            return useLayout({ className: 'custom' });
        });

        expect(result.current.className).toBe('custom wheel-layout wheel-layout--vertical wheel-layout--center');
    });

    it('adds the classes of the direction and justification', () => {
        const { result } = renderHook(() => {
            return useLayout({ direction: 'horizontal', justify: 'start' });
        });

        expect(result.current.className).toBe('wheel-layout wheel-layout--horizontal wheel-layout--start');
    });

    it('keeps the transform of the style outside a segment', () => {
        const { result } = renderHook(() => {
            return useLayout({ style: { transform: 'scale(2)' } });
        });

        expect(result.current.style.transform).toBe('scale(2)');
    });

    it('undoes the skew of its segment', () => {
        const segment: SegmentState = { from: 0, to: 60, magnitude: 60 };

        function wrapper(props: PropsWithChildren) {
            return <SegmentStateContext.Provider value={segment}>{props.children}</SegmentStateContext.Provider>;
        }

        const { result } = renderHook(() => {
            return useLayout({});
        }, { wrapper });

        expect(result.current.style.transform).toBe('translateX(-50%) skew(30deg) rotate(60deg) translateY(50%)');
    });

    it('moves out to the middle of the band of its ring', () => {
        const segment: SegmentState = { from: 0, to: 60, magnitude: 60 };
        const ring: RingState = { inner: 0.6, outer: 1 };

        function wrapper(props: PropsWithChildren) {
            return (
                <RingStateContext.Provider value={ring}>
                    <SegmentStateContext.Provider value={segment}>{props.children}</SegmentStateContext.Provider>
                </RingStateContext.Provider>
            );
        }

        const { result } = renderHook(() => {
            return useLayout({});
        }, { wrapper });

        expect(result.current.style.transform).toBe('translateX(-50%) skew(30deg) rotate(60deg) translateY(50%) translateY(-7.5%)');
    });

    it('puts the transform of the style after the move to the band of its ring', () => {
        const segment: SegmentState = { from: 0, to: 60, magnitude: 60 };
        const ring: RingState = { inner: 0.6, outer: 1 };

        function wrapper(props: PropsWithChildren) {
            return (
                <RingStateContext.Provider value={ring}>
                    <SegmentStateContext.Provider value={segment}>{props.children}</SegmentStateContext.Provider>
                </RingStateContext.Provider>
            );
        }

        const { result } = renderHook(() => {
            return useLayout({ style: { transform: 'scale(2)' } });
        }, { wrapper });

        expect(result.current.style.transform).toBe('translateX(-50%) skew(30deg) rotate(60deg) translateY(50%) translateY(-7.5%) scale(2)');
    });
});
