import type { CSSProperties } from 'react';
import { useSegmentState } from './useSegmentState';
import { transformLayout } from '../dom';
import { clsx } from 'clsx';
import type {
    Direction,
    Justification
} from '../models';
import {
    DEFAULT_DIRECTION,
    DEFAULT_JUSTIFICATION
} from '../models';

export interface UseLayoutProps {
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly direction?: Direction;
    readonly justify?: Justification;
}

export interface UseLayoutReturn {
    readonly className: string;
    readonly style: CSSProperties;
}

export function useLayout(props: UseLayoutProps): UseLayoutReturn {
    const {
        className: classNameProp,
        style: styleProp,
        direction = DEFAULT_DIRECTION,
        justify = DEFAULT_JUSTIFICATION
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
