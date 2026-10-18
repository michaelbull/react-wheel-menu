export const LABEL_ORIENTATIONS = [
    'downwards',
    'upwards',
    'inwards',
    'outwards',
    'clockwise',
    'counterclockwise',
] as const;

export type LabelOrientation = (typeof LABEL_ORIENTATIONS)[number];

export const DEFAULT_LABEL_ORIENTATION: LabelOrientation = 'downwards';
