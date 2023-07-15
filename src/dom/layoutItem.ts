import {
    Justify,
    Layout
} from '../models';
import * as CSS from 'csstype';

export function layoutItem(layout: Layout, justify: Justify): CSS.Properties {
    switch (layout) {
        // @formatter:off
        case 'vertical':    return layoutVertically(justify);
        case 'horizontal':  return layoutHorizontally(justify);
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

function layoutVertically(justify: Justify): CSS.Properties {
    switch (justify) {
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

function layoutHorizontally(justify: Justify): CSS.Properties {
    switch (justify) {
        // @formatter:off
        case 'start':   return HORIZONTAL_START;
        case 'center':  return HORIZONTAL_CENTER;
        case 'end':     return HORIZONTAL_END;
        // @formatter:on
    }
}
