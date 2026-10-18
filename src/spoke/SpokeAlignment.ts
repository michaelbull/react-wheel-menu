export const SPOKE_ALIGNMENTS = [
    'left',
    'center',
    'right',
] as const;

export type SpokeAlignment = (typeof SPOKE_ALIGNMENTS)[number];

export const DEFAULT_SPOKE_ALIGNMENT: SpokeAlignment = 'center';
