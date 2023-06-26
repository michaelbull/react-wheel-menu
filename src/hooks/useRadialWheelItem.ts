import { CSSProperties } from 'react';
import { useRadialWheelState } from './useRadialWheelState';

export interface UseRadialWheelItemReturn {
    readonly style: CSSProperties;
}

export function useRadialWheelItem(): UseRadialWheelItemReturn {
    const { sliceAngle } = useRadialWheelState();

    const skew = -(Math.min(60, sliceAngle - 90));
    const rotation = 90 - (sliceAngle / 2);

    return {
        style: {
            transform: `translateX(-50%) skew(${skew}deg) rotate(${rotation}deg)`
        }
    };
}
