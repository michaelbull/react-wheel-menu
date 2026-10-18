import {
    describe,
    expect,
    it,
} from 'vitest';
import type { Angle } from './Angle';
import { angleToDegrees } from './angleToDegrees';

describe('angleToDegrees', () => {
    it('returns the angle if the type is a number', () => {
        expect(angleToDegrees(360)).toBe(360);
    });

    it('returns the angle without the unit if the unit is deg', () => {
        expect(angleToDegrees('180deg')).toBe(180);
    });

    it('returns the angle converted to degrees if the unit is radians', () => {
        expect(angleToDegrees('2rad')).toBe(114.59155902616465);
    });

    it('returns the angle converted to degrees if the unit is gradians', () => {
        expect(angleToDegrees('20grad')).toBe(18);
    });

    it('returns the angle converted to degrees if the unit is turns', () => {
        expect(angleToDegrees('0.5turn')).toBe(180);
    });

    it('returns the angle converted to degrees if the unit is %', () => {
        expect(angleToDegrees('75%')).toBe(270);
    });

    it('throws for an angle with an unknown unit', () => {
        const angle = '90px' as Angle;
        expect(() => angleToDegrees(angle)).toThrow('angle must have a unit in [deg, grad, rad, turn, %], but was: 90px');
    });
});
