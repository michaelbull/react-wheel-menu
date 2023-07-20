import { Degrees } from '../angle';

export interface SegmentState {
    readonly from: Degrees;
    readonly to: Degrees;
    readonly magnitude: Degrees;
}

export const DefaultSegmentState: SegmentState = {
    from: 0,
    to: 0,
    magnitude: 0
};
