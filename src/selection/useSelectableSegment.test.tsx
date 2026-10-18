/**
 * @vitest-environment jsdom
 */
import { renderHook } from '@testing-library/react';
import type { PropsWithChildren } from 'react';
import {
    describe,
    expect,
    it,
    vi,
} from 'vitest';
import type { RingState } from '../ring/RingState';
import { RingStateContext } from '../ring/useRingState';
import type { SegmentAction } from './SegmentAction';
import { SegmentDispatchContext } from './useSegmentDispatch';
import { useSelectableSegment } from './useSelectableSegment';

describe('useSelectableSegment', () => {
    it('adds the segment with its span and ring', () => {
        const dispatch = vi.fn<(action: SegmentAction) => void>();
        const ring: RingState = { inner: 0.25, outer: 0.6 };

        function wrapper(props: PropsWithChildren) {
            return (
                <SegmentDispatchContext.Provider value={dispatch}>
                    <RingStateContext.Provider value={ring}>{props.children}</RingStateContext.Provider>
                </SegmentDispatchContext.Provider>
            );
        }

        renderHook(() => {
            useSelectableSegment('east', 45, 90);
        }, { wrapper });

        expect(dispatch).toHaveBeenLastCalledWith({
            type: 'segment_added',
            segment: { value: 'east', from: 45, to: 135, ring: { inner: 0.25, outer: 0.6 } },
        });
    });

    it('removes the segment it added on unmount', () => {
        const dispatch = vi.fn<(action: SegmentAction) => void>();

        function wrapper(props: PropsWithChildren) {
            return <SegmentDispatchContext.Provider value={dispatch}>{props.children}</SegmentDispatchContext.Provider>;
        }

        const { unmount } = renderHook(() => {
            useSelectableSegment('east', 45, 90);
        }, { wrapper });

        const added = dispatch.mock.calls[0][0];
        unmount();

        expect(dispatch).toHaveBeenLastCalledWith({ type: 'segment_removed', segment: added.segment });
    });

    it('does not add a segment with no value', () => {
        const dispatch = vi.fn<(action: SegmentAction) => void>();

        function wrapper(props: PropsWithChildren) {
            return <SegmentDispatchContext.Provider value={dispatch}>{props.children}</SegmentDispatchContext.Provider>;
        }

        renderHook(() => {
            useSelectableSegment(undefined, 45, 90);
        }, { wrapper });

        expect(dispatch).not.toHaveBeenCalled();
    });

    it('adds the segment again as a new record when its span changes', () => {
        const dispatch = vi.fn<(action: SegmentAction) => void>();

        function wrapper(props: PropsWithChildren) {
            return <SegmentDispatchContext.Provider value={dispatch}>{props.children}</SegmentDispatchContext.Provider>;
        }

        const { rerender } = renderHook((from: number) => {
            useSelectableSegment('east', from, 90);
        }, { wrapper, initialProps: 45 });

        rerender(90);

        expect(dispatch).toHaveBeenLastCalledWith({
            type: 'segment_added',
            segment: { value: 'east', from: 90, to: 180, ring: { inner: 0, outer: 1 } },
        });
    });
});
