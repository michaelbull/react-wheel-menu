import { CSSProperties } from 'react';
import {
    DEFAULT_LAYOUT_DIRECTION,
    LayoutDirection
} from './LayoutDirection';
import {
    DEFAULT_LAYOUT_JUSTIFICATION,
    LayoutJustification
} from './LayoutJustification';
import { useSegmentState } from '../segment';
import { clsx } from 'clsx';
import { transformLayout } from './transformLayout';

export interface UseLayoutProps {
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly direction?: LayoutDirection;
    readonly justify?: LayoutJustification;
}

export interface UseLayoutReturn {
    readonly className: string;
    readonly style: CSSProperties;
}

export function useLayout(props: UseLayoutProps): UseLayoutReturn {
    const {
        className: classNameProp,
        style: styleProp,
        direction = DEFAULT_LAYOUT_DIRECTION,
        justify = DEFAULT_LAYOUT_JUSTIFICATION
    } = props;

    const { size } = useSegmentState();

    const className = clsx(
        'circle-menu-layout',
        `circle-menu-layout--${direction}`,
        `circle-menu-layout--${justify}`,
        classNameProp
    );

    const style: CSSProperties = {
        transform: transformLayout(size),
        ...styleProp
    };

    return {
        className,
        style
    };
}
