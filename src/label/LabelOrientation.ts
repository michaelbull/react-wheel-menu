export type LabelOrientation =
    | 'downwards'
    | 'upwards'
    | 'inwards'
    | 'outwards'
    | 'clockwise'
    | 'counterclockwise';

export const LABEL_ORIENTATIONS: LabelOrientation[] = [
    'downwards',
    'upwards',
    'inwards',
    'outwards',
    'clockwise',
    'counterclockwise',
]

export const DEFAULT_LABEL_ORIENTATION: LabelOrientation = 'downwards';
