import React, {
    ComponentProps,
    CSSProperties,
    PropsWithChildren
} from 'react';
import { useRadialWheelState } from '../hooks';
import clsx from 'clsx';
import { directionSign } from '../state';

export type RadialWheelLabelProps = ComponentProps<'span'>;

export function RadialWheelLabel(props: PropsWithChildren<RadialWheelLabelProps>) {
    const {
        className: classNameProp,
        children,
        ...rest
    } = props;

    const {
        direction,
        startAngle,
        sliceIndex,
        sliceAngle,
    } = useRadialWheelState();

    const className = clsx('radial-wheel-label', classNameProp);

    const sign = directionSign(direction);
    const sliceStartAngle = sign * sliceAngle * sliceIndex;
    const sliceEndAngle = sign * sliceAngle * (sliceIndex + 1);

    const contentStyle: CSSProperties = {
        transform: `rotate(${-((sliceStartAngle + sliceEndAngle) / 2) - startAngle}deg)`
    };

    return (
        <span className={className} {...rest}>
            <span className="radial-wheel-label__content" style={contentStyle}>
                {children}
            </span>
        </span>
    );
}
