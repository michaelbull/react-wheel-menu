import {
    ComponentProps,
    CSSProperties
} from 'react';
import { useItemStyle } from '../hooks';
import clsx from 'clsx';
import {
    Justify,
    Layout
} from '../models';

export interface AnchorProps extends ComponentProps<'a'> {
    readonly layout?: Layout;
    readonly justify?: Justify;
}

export function Anchor(props: AnchorProps) {
    const {
        className: classNameProp,
        style: styleProp,
        layout,
        justify,
        ...rest
    } = props;

    const className = clsx('radial-wheel-item', 'radial-wheel-item--anchor', classNameProp);

    const itemStyle = useItemStyle({
        layout,
        justify
    });

    const style: CSSProperties = {
        ...itemStyle,
        ...styleProp
    };

    return <a
        className={className}
        style={style}
        {...rest}
    />;
}
