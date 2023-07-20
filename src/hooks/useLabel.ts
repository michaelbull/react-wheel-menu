import { useSliceState } from './useSliceState';
import type { CSSProperties } from 'react';
import type {
    Justification,
    Offset,
    Orientation
} from '../models';
import {
    DEFAULT_JUSTIFICATION,
    DEFAULT_OFFSET,
    DEFAULT_ORIENTATION,
    DefaultSliceState
} from '../models';
import { transformLabel } from '../dom';
import { useSpokeState } from './useSpokeState';
import clsx from 'clsx';

export interface UseLabelProps {
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly orient?: Orientation;
    readonly justify?: Justification;
    readonly offset?: Offset;
}

export interface UseLabelReturn {
    readonly className: string;
    readonly style: CSSProperties;
}

export function useLabel(props: UseLabelProps): UseLabelReturn {
    const {
        className: classNameProp,
        style: styleProp,
        orient = DEFAULT_ORIENTATION,
        justify = DEFAULT_JUSTIFICATION,
        offset = DEFAULT_OFFSET
    } = props;

    const angle = useLabelAngle();

    const className = clsx(
        'circle-menu-label',
        `circle-menu-label--${justify}`,
        classNameProp
    );

    const style: CSSProperties = {
        transform: transformLabel(angle, orient, offset),
        ...styleProp
    };

    return {
        className,
        style
    };
}

function useLabelAngle(): number {
    const sliceState = useSliceState();
    const spokeState = useSpokeState();

    if (sliceState === DefaultSliceState) {
        return spokeState.angle;
    } else {
        return sliceState.from + (sliceState.size / 2);
    }
}
