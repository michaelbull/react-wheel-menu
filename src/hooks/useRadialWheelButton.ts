import { CSSProperties } from 'react';
import { useRadialWheelState } from './useRadialWheelState';
import { directionSign } from '../state';

export interface UseRadialWheelButtonReturn {
    readonly style: CSSProperties;
}

export function useRadialWheelButton(): UseRadialWheelButtonReturn {
    const {
        direction,
        startAngle,
        sliceIndex,
        sliceAngle
    } = useRadialWheelState();

    const sign = directionSign(direction);
    const sliceStartAngle = sign * sliceAngle * sliceIndex;

    const skew = Math.min(60, sliceAngle - 90);
    const rotation = startAngle + sliceStartAngle + skew;
    const transform = `rotate(${rotation}deg) skew(${skew}deg)`;

    const style: CSSProperties = {
        transform
    };

    return {
        style
    };
}
