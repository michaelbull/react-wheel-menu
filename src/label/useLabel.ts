import type { CSSProperties } from 'react';
import { clsx } from 'clsx';
import type { Degrees } from '../angle';
import { useSpokeState } from '../spoke';
import {
    DefaultSegmentState,
    useSegmentState
} from '../segment';
import type { LabelOrientation } from './LabelOrientation';
import { DEFAULT_LABEL_ORIENTATION } from './LabelOrientation';
import type { LabelJustification } from './LabelJustification';
import { DEFAULT_LABEL_JUSTIFICATION } from './LabelJustification';
import type { LabelOffset } from './LabelOffset';
import { transformLabel } from './transformLabel';

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
        offset
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

function useLabelAngle(): Degrees {
    const segmentState = useSegmentState();
    const spokeState = useSpokeState();

    if (segmentState === DefaultSegmentState) {
        return spokeState.angle;
    } else {
        return segmentState.from + (segmentState.size / 2);
    }
}
