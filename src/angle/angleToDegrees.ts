import type {
    Angle,
    AngleUnit,
    AngleWithUnit,
    Degrees
} from './Angle';

export function angleToDegrees(angle: Angle): Degrees {
    if (typeof angle === 'number') {
        return angle;
    } else if (angle.endsWith('deg')) {
        return numberFrom(angle, 'deg');
    } else if (angle.endsWith('grad')) {
        const gradians = numberFrom(angle, 'grad');
        return gradians * 0.9;
    } else if (angle.endsWith('rad')) {
        const radians = numberFrom(angle, 'rad');
        return radians * 180 / Math.PI;
    } else if (angle.endsWith('turn')) {
        const turns = numberFrom(angle, 'turn');
        return turns * 360;
    } else if (angle.endsWith('%')) {
        const percentage = numberFrom(angle, '%');
        return percentage * 360 / 100;
    } else {
        throw new Error(`angle must have a unit in [${UNITS.join(', ')}], but was: ${angle}`);
    }
}

const UNITS: AngleUnit[] = [
    'deg',
    'grad',
    'rad',
    'turn'
];

function numberFrom(angle: AngleWithUnit, unit: AngleUnit): number {
    return Number(angle.substring(0, angle.length - unit.length));
}
