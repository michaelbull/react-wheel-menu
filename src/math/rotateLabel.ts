import {
    Degrees,
    Orientation
} from '../models';

export function rotateLabel(orientation: Orientation, angle: Degrees): Degrees {
    switch (orientation) {
        case 'downwards':
            return -angle;

        case 'upwards':
            return 180 - angle;

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
