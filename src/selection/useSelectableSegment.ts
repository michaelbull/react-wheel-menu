import { useEffect } from 'react';
import type { Degrees } from '../angle/Angle';
import { useRingState } from '../ring/useRingState';
import type { SelectableSegment } from './SelectableSegment';
import { useSegmentDispatch } from './useSegmentDispatch';

/**
 * Registers a segment with the wheel that selects it, for as long as the segment is mounted.
 */
export function useSelectableSegment(value: string | undefined, from: Degrees, magnitude: Degrees) {
    const dispatch = useSegmentDispatch();
    const {
        inner,
        outer,
    } = useRingState();

    useEffect(() => {
        if (dispatch === null || value === undefined) {
            return undefined;
        } else {
            const segment: SelectableSegment = {
                value,
                from,
                to: from + magnitude,
                ring: {
                    inner,
                    outer,
                },
            };

            dispatch({ type: 'segment_added', segment });

            return function cleanup() {
                dispatch({ type: 'segment_removed', segment });
            };
        }
    }, [dispatch, value, from, magnitude, inner, outer]);
}
