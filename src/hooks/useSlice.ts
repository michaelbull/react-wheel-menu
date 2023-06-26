import { CSSProperties } from 'react';

export interface UseSliceProps {
    readonly from: number;
    readonly to: number;
}

export interface UseSliceReturn {
    readonly from: number;
    readonly to: number;
    readonly angle: number;
    readonly style: CSSProperties;
}

export function useSlice(props: UseSliceProps): UseSliceReturn {
    const {
        from: fromProp,
        to: toProp
    } = props;

    const from = modulo(fromProp, 360);
    const to = modulo(toProp, 360);
    const delta = modulo(toProp - fromProp, 360);

    const angle = Math.min(150, delta);
    const skew = angle - 90;
    const rotation = from + skew;
    const transform = `rotate(${rotation}deg) skew(${skew}deg)`;

    const style: CSSProperties = {
        transform
    };

    return {
        from,
        to,
        angle,
        style
    };
}

function modulo(n: number, d: number): number {
    return (n !== 0 && n % d === 0) ? d : ((n % d) + d) % d;
}
