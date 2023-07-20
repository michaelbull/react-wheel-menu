import type { CSSProperties } from 'react';
import { clsx } from 'clsx';
import { useSegmentState } from '../segment';
import { transformLayout } from './transformLayout';
import type { LayoutDirection } from './LayoutDirection';
import { DEFAULT_LAYOUT_DIRECTION } from './LayoutDirection';
import type { LayoutJustification } from './LayoutJustification';
import { DEFAULT_LAYOUT_JUSTIFICATION } from './LayoutJustification';

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
