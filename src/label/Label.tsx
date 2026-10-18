import type {
    ComponentPropsWithoutRef,
    CSSProperties,
    ElementType,
} from 'react';
import type { LabelJustification } from './LabelJustification';
import type { LabelOffset } from './LabelOffset';
import type { LabelOrientation } from './LabelOrientation';
import { useLabel } from './useLabel';

export type LabelProps<T extends ElementType = 'span'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly className?: string;
    readonly style?: CSSProperties;
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
        offset,
    });

    return <Component
        {...labelProps}
        {...rest}
    />;
}
