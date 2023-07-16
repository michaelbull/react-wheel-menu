import {
    DEFAULT_DIRECTION,
    DEFAULT_JUSTIFICATION,
    Direction,
    Justification
} from '../models';
import * as CSS from 'csstype';

export function styleLayout(
    direction: Direction = DEFAULT_DIRECTION,
    justification: Justification = DEFAULT_JUSTIFICATION
): CSS.Properties {
    switch (direction) {
        // @formatter:off
        case 'vertical':    return layoutVertically(justification);
        case 'horizontal':  return layoutHorizontally(justification);
        // @formatter:on
    }
}

const VERTICAL_START: CSS.Properties = {
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start'
};

const VERTICAL_CENTER: CSS.Properties = {
    flexDirection: 'column-reverse',
    justifyContent: 'center'
};

const VERTICAL_END: CSS.Properties = {
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end'
};

function layoutVertically(justification: Justification): CSS.Properties {
    switch (justification) {
        // @formatter:off
        case 'start':   return VERTICAL_START;
        case 'center':  return VERTICAL_CENTER;
        case 'end':     return VERTICAL_END;
        // @formatter:on
    }
}

const HORIZONTAL_START: CSS.Properties = {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end'
};

const HORIZONTAL_CENTER: CSS.Properties = {
    flexDirection: 'row-reverse',
    justifyContent: 'center'
};

const HORIZONTAL_END: CSS.Properties = {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start'
};

function layoutHorizontally(justification: Justification): CSS.Properties {
    switch (justification) {
        // @formatter:off
        case 'start':   return HORIZONTAL_START;
        case 'center':  return HORIZONTAL_CENTER;
        case 'end':     return HORIZONTAL_END;
        // @formatter:on
    }
}
