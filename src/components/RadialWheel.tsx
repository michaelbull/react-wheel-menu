import React, {
    Children,
    ComponentProps,
    PropsWithChildren
} from 'react';
import { RadialWheelStateContext } from '../hooks';
import {
    RadialWheelDirection,
    RadialWheelState
} from '../state';
import clsx from 'clsx';

export const DEFAULT_DIRECTION: RadialWheelDirection = 'cw';
export const DEFAULT_START_ANGLE = 0;

export interface RadialWheelProps extends ComponentProps<'div'> {
    readonly direction?: RadialWheelDirection;
    readonly startAngle?: number;
    readonly endAngle?: number;
}

export function RadialWheel(props: PropsWithChildren<RadialWheelProps>) {
    const {
        className: classNameProp,
        direction = DEFAULT_DIRECTION,
        startAngle = DEFAULT_START_ANGLE,
        endAngle = startAngle + 360,
        children,
        ...rest
    } = props;

    const className = clsx('radial-wheel', classNameProp);
    const sliceCount = Children.count(children);
    const sliceAngle = (endAngle - startAngle) / sliceCount;

    function state(sliceIndex: number): RadialWheelState {
        return {
            direction,
            startAngle,
            endAngle,
            sliceCount,
            sliceIndex,
            sliceAngle
        };
    }

    return (
        <div className={className} {...rest}>
            {Children.map(children, (child, index) =>
                <RadialWheelStateContext.Provider value={state(index)}>
                    {child}
                </RadialWheelStateContext.Provider>
            )}
        </div>
    );
}
