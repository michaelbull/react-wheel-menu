import type { Degrees } from '../angle/Angle';

/**
 * A segment of a wheel, by the value it is selected as and the directions it spans.
 */
export interface SegmentSpan {
    readonly value: string;
    readonly from: Degrees;
    readonly to: Degrees;
}
