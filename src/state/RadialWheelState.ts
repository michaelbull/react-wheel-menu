import { RadialWheelDirection } from './RadialWheelDirection';

export interface RadialWheelState {
    readonly direction: RadialWheelDirection;
    readonly startAngle: number;
    readonly endAngle: number;

    readonly sliceCount: number;
    readonly sliceIndex: number;
    readonly sliceAngle: number;
}

export const DefaultRadialWheelState: RadialWheelState = {
    direction: 'cw',
    startAngle: 0,
    endAngle: 0,

    sliceIndex: 0,
    sliceCount: 0,
    sliceAngle: 0
};
