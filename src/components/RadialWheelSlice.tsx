import React, {
    ComponentProps,
    CSSProperties,
    PropsWithChildren
} from 'react';
import { useRadialWheelSlice } from '../hooks';
import clsx from 'clsx';

export type RadialWheelSliceProps = ComponentProps<'span'>;

export function RadialWheelSlice(props: PropsWithChildren<RadialWheelSliceProps>) {
    const {
        className: classNameProp,
        style: styleProp,
        ...rest
    } = props;

    const { style: sliceStyle } = useRadialWheelSlice();

    const className = clsx('radial-wheel-slice', classNameProp);

    const style: CSSProperties = {
        ...sliceStyle,
        ...styleProp
    };

    return (
        <span
            className={className}
            style={style}
            {...rest}
        />
    );
}
