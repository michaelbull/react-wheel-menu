import React, { CSSProperties } from 'react';

const DEFAULT_SIZE = '30%';
const DEFAULT_OFFSET = '50px';

export interface RadialWheelArrowProps {
    readonly angle: number;
    readonly size?: string;
    readonly offset?: string;
}

export function RadialWheelArrow(props: RadialWheelArrowProps) {
    const {
        angle,
        size = DEFAULT_SIZE,
        offset = DEFAULT_OFFSET
    } = props;

    const style: CSSProperties = {
        width: size,
        height: size,
        transform: `rotate(${angle}deg) translateX(${offset})`
    };

    return (
        <svg className="radial-wheel-arrow" style={style} viewBox="0 0 1000 1000">
            <path
                d="M217.6 915.1c0-19.2 7.2-38.4 21.9-53l362-362.1-362-362.1c-29.3-29.3-29.3-76.7 0-106 29.3-29.3 76.7-29.3 106 0l415 415.1c29.3 29.3 29.3 76.7 0 106l-415 415c-29.3 29.3-76.7 29.3-106 0-14.7-14.6-21.9-33.8-21.9-52.9z" />
        </svg>
    );
}
