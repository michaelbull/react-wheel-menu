import {
    DEFAULT_JUSTIFICATION,
    DEFAULT_ORIENTATION,
    Justification,
    Orientation
} from '../models';
import * as CSS from 'csstype';

export function styleLabel(
    orientation: Orientation = DEFAULT_ORIENTATION,
    justification: Justification = DEFAULT_JUSTIFICATION
): CSS.Properties {
    if (orientation === 'counterclockwise') {
        return orientBackwards(justification);
    } else {
        return orientForwards(justification);
    }
}

const START: CSS.Properties = {
    justifyContent: 'flex-start'
};

const CENTER: CSS.Properties = {
    justifyContent: 'center'
};

const END: CSS.Properties = {
    justifyContent: 'flex-end'
};

function orientForwards(justification: Justification): CSS.Properties {
    switch (justification) {
        // @formatter:off
        case 'start':   return START;
        case 'center':  return CENTER;
        case 'end':     return END;
        // @formatter:on
    }
}

function orientBackwards(justification: Justification): CSS.Properties {
    switch (justification) {
        // @formatter:off
        case 'start':   return END;
        case 'center':  return CENTER;
        case 'end':     return START;
        // @formatter:on
    }
}
