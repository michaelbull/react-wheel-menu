export const LABEL_JUSTIFICATIONS = [
    'start',
    'center',
    'end',
] as const;

export type LabelJustification = (typeof LABEL_JUSTIFICATIONS)[number];

export const DEFAULT_LABEL_JUSTIFICATION: LabelJustification = 'center';
