/* https://developer.mozilla.org/en-US/docs/Web/CSS/angle */

export const ANGLE_UNITS = [
    'deg',
    'grad',
    'rad',
    'turn',
    '%',
] as const;

export type AngleUnit = (typeof ANGLE_UNITS)[number];

export type Degrees = number;
export type Radians = number;
export type AngleWithUnit = `${number}${AngleUnit}`;
export type Angle = Degrees | AngleWithUnit;
