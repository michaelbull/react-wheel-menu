import type {
    ComponentPropsWithoutRef,
    ElementType
} from 'react';
import { useLabel } from './useLabel';
import type { LabelOrientation } from './LabelOrientation';
import type { LabelJustification } from './LabelJustification';
import type { LabelOffset } from './LabelOffset';

export type LabelProps<T extends ElementType = 'span'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly orient?: LabelOrientation;
    readonly justify?: LabelJustification;
    readonly offset?: LabelOffset;
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
