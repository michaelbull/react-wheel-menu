import type { SegmentAction } from './SegmentAction';
import type { SelectableSegment } from './SelectableSegment';

/**
 * The segments a wheel can select. A segment is removed by the record it was added as, so a
 * segment that changes is removed and added again as a new record.
 */
export function segmentReducer(segments: readonly SelectableSegment[], action: SegmentAction): readonly SelectableSegment[] {
    switch (action.type) {
        case 'segment_added':
            return [...segments, action.segment];
        case 'segment_removed':
            return segments.filter(segment => segment !== action.segment);
    }
}
