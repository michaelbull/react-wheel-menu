import * as CSS from 'csstype';

export function transformItem(angle: number): CSS.Properties['transform'] {
    const skew = `skew(${-(angle - 90)}deg)`;
    const rotation = `rotate(${90 - (angle / 2)}deg)`;

    return `translateX(-50%) ${skew} ${rotation} translateY(50%)`;
}
