import { clsx } from 'clsx';
import type { CSSProperties } from 'react';
import {
    DEFAULT_LABEL_JUSTIFICATION,
    type LabelJustification,
} from './LabelJustification';
import type { LabelOffset } from './LabelOffset';
import {
    DEFAULT_LABEL_ORIENTATION,
    type LabelOrientation,
} from './LabelOrientation';
import { transformLabel } from './transformLabel';
import { useLabelAngle } from './useLabelAngle';

export interface UseLabelProps {
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly orient?: LabelOrientation;
    readonly justify?: LabelJustification;
    readonly offset?: LabelOffset;
}

export interface UseLabelReturn {
    readonly className: string;
    readonly style: CSSProperties;
}

export function useLabel(props: UseLabelProps): UseLabelReturn {
    const {
        className: classNameProp,
        style: styleProp,
        orient = DEFAULT_LABEL_ORIENTATION,
        justify = DEFAULT_LABEL_JUSTIFICATION,
        offset,
    } = props;

    const angle = useLabelAngle();

    const className = clsx(
        'wheel-label',
        `wheel-label--${justify}`,
        classNameProp,
    );

    const style: CSSProperties = {
        transform: transformLabel(angle, orient, offset),
        ...styleProp,
    };

    return {
        className,
        style,
    };
}
