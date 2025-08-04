import type { Degrees } from '../angle/Angle';

export interface SpokeState {
    readonly angle: Degrees;
}

export const DefaultSpokeState: SpokeState = {
    angle: 0,
};
