import {
    ComponentPropsWithoutRef,
    ElementType
} from 'react';
import { useCircleMenu } from '../hooks';

export type CircleMenuProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
};

export function CircleMenu<T extends ElementType = 'div'>(props: CircleMenuProps<T>) {
    const {
        as: Component = 'div',
        className,
        ...rest
    } = props;

    const circleMenuProps = useCircleMenu({
        className
    });

    return <Component
        {...circleMenuProps}
        {...rest}
    />;
}
