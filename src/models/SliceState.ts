import { Degrees } from './Angle';

export interface SliceState {
    readonly from: Degrees;
    readonly to: Degrees;
    readonly angle: Degrees;
}

export const EmptySliceState: SliceState = {
    from: 0,
    to: 0,
    angle: 0
};
