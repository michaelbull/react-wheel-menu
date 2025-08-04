import type { Degrees } from '../angle/Angle';
import type { SegmentGap } from './SegmentGap';

export interface SegmentState {
    readonly from: Degrees;
    readonly to: Degrees;
    readonly magnitude: Degrees;
    readonly gapBefore?: SegmentGap;
    readonly gapAfter?: SegmentGap;
}

export const DefaultSegmentState: SegmentState = {
    from: 0,
    to: 0,
    magnitude: 0,
};
