/**
 * How a wheel picks its active segment.
 *
 * - `hover`: by CSS `:hover` alone. The wheel does not track the pointer.
 * - `direction`: by the direction of the pointer from the centre, at any distance, including past
 *   the edge of the wheel.
 */
export type WheelSelect =
    | 'hover'
    | 'direction';

export const WHEEL_SELECTS: WheelSelect[] = [
    'hover',
    'direction',
];

export const DEFAULT_WHEEL_SELECT: WheelSelect = 'hover';
