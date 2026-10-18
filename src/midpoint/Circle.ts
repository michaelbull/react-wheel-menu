import type { Midpoint } from './Midpoint';

export interface Circle {
    readonly midpoint: Midpoint;
    readonly radiusPixels: number;
}
