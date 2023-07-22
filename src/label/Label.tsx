import {
    ComponentPropsWithoutRef,
    ElementType
} from 'react';
import { LabelOrientation } from './LabelOrientation';
import { LabelJustification } from './LabelJustification';
import { LabelOffset } from './LabelOffset';
import { useLabel } from './useLabel';

export type LabelProps<T extends ElementType = 'span'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly orient?: LabelOrientation;
    readonly justify?: LabelJustification;
    readonly offset?: LabelOffset;
}

export function Label<T extends ElementType = 'span'>(props: LabelProps<T>) {
    const {
        as: Component = 'span',
        className,
        style,
        orient,
        justify,
        offset,
        ...rest
    } = props;

    const labelProps = useLabel({
        className,
        style,
        orient,
        justify,
        offset
    });

    return <Component
        {...labelProps}
        {...rest}
    />;
}
