import { CSSProperties } from 'react';
import { useSliceState } from './useSliceState';
import { transformLayout } from '../dom';
import clsx from 'clsx';
import {
    DEFAULT_DIRECTION,
    DEFAULT_JUSTIFICATION,
    Direction,
    Justification
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

    const { size } = useSliceState();

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
