import { useRadialWheelState } from './useRadialWheelState';
import { CSSProperties } from 'react';

export interface UseRadialWheelSliceReturn {
    readonly style: CSSProperties;
}

export function useRadialWheelSlice(): UseRadialWheelSliceReturn {
    const { sliceAngle } = useRadialWheelState();

    const skew = -(Math.min(60, sliceAngle - 90));
    const rotation = 90 - (sliceAngle / 2);

    return {
        style: {
            transform: `translate3d(-50%, 0, 0) skew(${skew}deg) rotate(${rotation}deg)`
        }
    };
}
