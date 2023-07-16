import {
    ComponentPropsWithoutRef,
    ElementType
} from 'react';
import clsx from 'clsx';

export type CircleMenuProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
};

export function CircleMenu<T extends ElementType = 'div'>(props: CircleMenuProps<T>) {
    const {
        as: Component = 'div',
        className: classNameProp,
        ...rest
    } = props;

    const className = clsx('circle-menu', classNameProp);

    return <Component
        className={className}
        {...rest}
    />;
}
