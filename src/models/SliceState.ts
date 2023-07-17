import { Degrees } from './Angle';

export interface SliceState {
    readonly from: Degrees;
    readonly to: Degrees;
    readonly delta: Degrees;
}

export const DefaultSliceState: SliceState = {
    from: 0,
    to: 0,
    delta: 0
};
