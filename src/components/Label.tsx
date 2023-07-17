import {
    ComponentPropsWithoutRef,
    ElementType
} from 'react';
import { useLabel } from '../hooks';
import {
    Justification,
    Offset,
    Orientation
} from '../models';

export type LabelProps<T extends ElementType = 'span'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly orient?: Orientation;
    readonly justify?: Justification;
    readonly offset?: Offset;
}

export function Label<T extends ElementType = 'span'>(props: LabelProps<T>) {
    const {
        as: Component = 'span',
        className: classNameProp,
        style: styleProp,
        orient,
        justify,
        offset,
        ...rest
    } = props;

    const labelProps = useLabel({
        className: classNameProp,
        style: styleProp,
        orient,
        justify,
        offset
    });

    return <Component
        {...labelProps}
        {...rest}
    />;
}
