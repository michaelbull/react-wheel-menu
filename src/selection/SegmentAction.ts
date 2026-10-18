import type { SelectableSegment } from './SelectableSegment';

export interface SegmentAdded {
    readonly type: 'segment_added';
    readonly segment: SelectableSegment;
}

export interface SegmentRemoved {
    readonly type: 'segment_removed';
    readonly segment: SelectableSegment;
}

/**
 * What a segment tells the wheel that selects it.
 */
export type SegmentAction = SegmentAdded | SegmentRemoved;
