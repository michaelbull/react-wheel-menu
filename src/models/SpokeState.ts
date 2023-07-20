import type { Degrees } from './Angle';

export interface SpokeState {
    readonly angle: Degrees;
}

export const DefaultSpokeState: SpokeState = {
    angle: 0
};
