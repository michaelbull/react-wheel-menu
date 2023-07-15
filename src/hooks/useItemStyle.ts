import { CSSProperties } from 'react';
import { useSliceState } from './useSliceState';
import {
    DEFAULT_JUSTIFY,
    DEFAULT_LAYOUT,
    Justify,
    Layout
} from '../models';

export interface UseItemStyleProps {
    readonly layout?: Layout;
    readonly justify?: Justify;
}

export function useItemStyle(props: UseItemStyleProps): CSSProperties {
    const {
        layout = DEFAULT_LAYOUT,
        justify = DEFAULT_JUSTIFY
    } = props;

    const { angle } = useSliceState();

    const skew = -(angle - 90);
    const rotation = 90 - (angle / 2);
    const transform = `translateX(-50%) skew(${skew}deg) rotate(${rotation}deg) translateY(50%)`;

    return {
        ...layoutStyle(layout, justify),
        transform
    };
}

function layoutStyle(layout: Layout, justify: Justify): CSSProperties {
    switch (layout) {
        case 'vertical':
            return verticalStyle(justify);

        case 'horizontal':
            return horizontalStyle(justify);
    }
}

const VERTICAL_START: CSSProperties = {
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start'
};

const VERTICAL_CENTER: CSSProperties = {
    flexDirection: 'column-reverse',
    justifyContent: 'center'
};

const VERTICAL_END: CSSProperties = {
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end'
};

function verticalStyle(justify: Justify): CSSProperties {
    switch (justify) {
        case 'start':
            return VERTICAL_START;

        case 'center':
            return VERTICAL_CENTER;

        case 'end':
            return VERTICAL_END;
    }
}

const HORIZONTAL_START: CSSProperties = {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end'
};

const HORIZONTAL_CENTER: CSSProperties = {
    flexDirection: 'row-reverse',
    justifyContent: 'center'
};

const HORIZONTAL_END: CSSProperties = {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start'
};

function horizontalStyle(justify: Justify): CSSProperties {
    switch (justify) {
        case 'start':
            return HORIZONTAL_START;

        case 'center':
            return HORIZONTAL_CENTER;

        case 'end':
            return HORIZONTAL_END;
    }
}
