export const LAYOUT_JUSTIFICATIONS = [
    'start',
    'center',
    'end',
] as const;

export type LayoutJustification = (typeof LAYOUT_JUSTIFICATIONS)[number];

export const DEFAULT_LAYOUT_JUSTIFICATION: LayoutJustification = 'center';
