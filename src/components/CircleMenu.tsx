import { ComponentProps } from 'react';
import clsx from 'clsx';

export type CircleMenuProps = ComponentProps<'div'>;

export function CircleMenu(props: CircleMenuProps) {
    const {
        className: classNameProp,
        ...rest
    } = props;

    const className = clsx('circle-menu', classNameProp);

    return <div
        className={className}
        {...rest}
    />;
}
