import { ComponentProps } from 'react';
import clsx from 'clsx';

export type RadialWheelProps = ComponentProps<'div'>;

export function RadialWheel(props: RadialWheelProps) {
    const {
        className: classNameProp,
        ...rest
    } = props;

    const className = clsx('radial-wheel', classNameProp);

    return <div
        className={className}
        {...rest}
    />;
}
