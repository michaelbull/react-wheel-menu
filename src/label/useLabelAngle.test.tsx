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
import type { SegmentState } from '../segment/SegmentState';
import { SegmentStateContext } from '../segment/useSegmentState';
import type { SpokeState } from '../spoke/SpokeState';
import { SpokeStateContext } from '../spoke/useSpokeState';
import { useLabelAngle } from './useLabelAngle';

describe('useLabelAngle', () => {
    it('returns 0 outside a segment and a spoke', () => {
        const { result } = renderHook(() => {
            return useLabelAngle();
        });

        expect(result.current).toBe(0);
    });

    it('returns the centre of the segment inside a segment', () => {
        const segment: SegmentState = { from: 30, to: 90, magnitude: 60 };

        function wrapper(props: PropsWithChildren) {
            return <SegmentStateContext.Provider value={segment}>{props.children}</SegmentStateContext.Provider>;
        }

        const { result } = renderHook(() => {
            return useLabelAngle();
        }, { wrapper });

        expect(result.current).toBe(60);
    });

    it('returns the angle of the spoke inside a spoke', () => {
        const spoke: SpokeState = { angle: 135 };

        function wrapper(props: PropsWithChildren) {
            return <SpokeStateContext.Provider value={spoke}>{props.children}</SpokeStateContext.Provider>;
        }

        const { result } = renderHook(() => {
            return useLabelAngle();
        }, { wrapper });

        expect(result.current).toBe(135);
    });

    it('returns the centre of the segment inside a spoke inside a segment', () => {
        const segment: SegmentState = { from: 30, to: 90, magnitude: 60 };
        const spoke: SpokeState = { angle: 135 };

        function wrapper(props: PropsWithChildren) {
            return (
                <SegmentStateContext.Provider value={segment}>
                    <SpokeStateContext.Provider value={spoke}>{props.children}</SpokeStateContext.Provider>
                </SegmentStateContext.Provider>
            );
        }

        const { result } = renderHook(() => {
            return useLabelAngle();
        }, { wrapper });

        expect(result.current).toBe(60);
    });
});
