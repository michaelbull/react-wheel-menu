import {
    DEFAULT_JUSTIFY,
    DEFAULT_ORIENTATION,
    Justify,
    Orientation
} from '../models';
import * as CSS from 'csstype';

export function orientLabel(
    orientation: Orientation = DEFAULT_ORIENTATION,
    justify: Justify = DEFAULT_JUSTIFY
): CSS.Properties {
    if (orientation === 'counterclockwise') {
        return orientBackwards(justify);
    } else {
        return orientForwards(justify);
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

function orientForwards(justify: Justify): CSS.Properties {
    switch (justify) {
        // @formatter:off
        case 'start':   return START;
        case 'center':  return CENTER;
        case 'end':     return END;
        // @formatter:on
    }
}

function orientBackwards(justify: Justify): CSS.Properties {
    switch (justify) {
        // @formatter:off
        case 'start':   return END;
        case 'center':  return CENTER;
        case 'end':     return START;
        // @formatter:on
    }
}
