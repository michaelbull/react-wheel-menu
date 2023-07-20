import { Degrees } from '../angle';

export interface SpokeState {
    readonly angle: Degrees;
}

export const DefaultSpokeState: SpokeState = {
    angle: 0
};
