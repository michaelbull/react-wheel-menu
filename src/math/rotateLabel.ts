import {
    Orientation,
    SliceState
} from '../models';

export function rotateLabel(state: SliceState, orientation: Orientation) {
    const { from, angle } = state;

    switch (orientation) {
        case 'downwards':
            return -(from + (angle / 2));

        case 'upwards':
            return 180 - (from + (angle / 2));

        case 'inwards':
            return 0;

        case 'outwards':
            return 180;

        case 'clockwise':
            return 270;

        case 'counterclockwise':
            return 90;
    }
}
