export interface SliceState {
    readonly from: number;
    readonly to: number;
    readonly angle: number;
}

export const DefaultSliceState: SliceState = {
    from: 0,
    to: 0,
    angle: 0
};
