import type { RadiusShare } from './RadiusShare';

export interface RingState {
    readonly inner: RadiusShare;
    readonly outer: RadiusShare;
}

/**
 * The whole wheel, as a segment outside any `Ring` is drawn.
 */
export const DefaultRingState: RingState = {
    inner: 0,
    outer: 1,
};
