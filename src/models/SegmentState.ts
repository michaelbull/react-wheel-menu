import type { Degrees } from './Angle';

export interface SegmentState {
    readonly from: Degrees;
    readonly to: Degrees;
    readonly size: Degrees;
}

export const DefaultSegmentState: SegmentState = {
    from: 0,
    to: 0,
    size: 0
};
