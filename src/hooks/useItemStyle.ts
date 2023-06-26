import { CSSProperties } from 'react';
import { useSliceState } from './useSliceState';

export function useItemStyle(): CSSProperties {
    const { angle } = useSliceState();

    const skew = -(angle - 90);
    const rotation = 90 - (angle / 2);

    return {
        transform: `translateX(-50%) skew(${skew}deg) rotate(${rotation}deg)`
    };
}
