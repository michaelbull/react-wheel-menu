/* https://developer.mozilla.org/en-US/docs/Web/CSS/angle */

export type AngleUnit =
    | 'deg'
    | 'grad'
    | 'rad'
    | 'turn'
    | '%';

export type Degrees = number;
export type Radians = number;
export type AngleWithUnit = `${number}${AngleUnit}`;
export type Angle = Degrees | AngleWithUnit;
