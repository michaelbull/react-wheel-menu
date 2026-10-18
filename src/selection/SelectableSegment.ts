import type { RingState } from '../ring/RingState';
import type { SegmentSpan } from './SegmentSpan';

/**
 * A segment that a wheel can select, with the ring it is drawn in.
 */
export interface SelectableSegment extends SegmentSpan {
    readonly ring: RingState;
}
