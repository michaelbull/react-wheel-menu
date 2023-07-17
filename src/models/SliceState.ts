import { Degrees } from './Angle';

export interface SliceState {
    readonly from: Degrees;
    readonly to: Degrees;
    readonly size: Degrees;
}

export const DefaultSliceState: SliceState = {
    from: 0,
    to: 0,
    size: 0
};
