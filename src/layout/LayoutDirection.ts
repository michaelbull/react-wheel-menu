export const LAYOUT_DIRECTIONS = [
    'horizontal',
    'vertical',
] as const;

export type LayoutDirection = (typeof LAYOUT_DIRECTIONS)[number];

export const DEFAULT_LAYOUT_DIRECTION: LayoutDirection = 'vertical';
