import { CSSProperties } from 'react';
import {
    DEFAULT_LABEL_ORIENTATION,
    LabelOrientation
} from './LabelOrientation';
import {
    DEFAULT_LABEL_JUSTIFICATION,
    LabelJustification
} from './LabelJustification';
import { LabelOffset } from './LabelOffset';
import { clsx } from 'clsx';
import { transformLabel } from './transformLabel';
import { Degrees } from '../angle';
import {
    DefaultSegmentState,
    useSegmentState
} from '../segment';
import { useSpokeState } from '../spoke';

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
