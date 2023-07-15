import {
    ComponentProps,
    CSSProperties
} from 'react';
import { useItemStyle } from '../hooks';
import clsx from 'clsx';
import {
    Justification,
    Layout
} from '../models';

export interface ButtonProps extends ComponentProps<'button'> {
    readonly layout?: Layout;
    readonly justify?: Justification;
}

export function Button(props: ButtonProps) {
    const {
        className: classNameProp,
        style: styleProp,
        layout,
        justify,
        ...rest
    } = props;

    const className = clsx('circle-menu-item', 'circle-menu-item--button', classNameProp);

    const itemStyle = useItemStyle({
        layout,
        justify
    });

    const style: CSSProperties = {
        ...itemStyle,
        ...styleProp
    };

    return <button
        className={className}
        style={style}
        {...rest}
    />;
}
