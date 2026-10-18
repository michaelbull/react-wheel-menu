import {
    describe,
    expect,
    it,
} from 'vitest';
import { degreesWithin } from './degreesWithin';

describe('degreesWithin', () => {
    it('holds a direction inside the span', () => {
        expect(degreesWithin(60, 45, 90)).toBe(true);
    });

    it('does not hold a direction before the span', () => {
        expect(degreesWithin(30, 45, 90)).toBe(false);
    });

    it('does not hold a direction after the span', () => {
        expect(degreesWithin(120, 45, 90)).toBe(false);
    });

    it('holds the direction at from', () => {
        expect(degreesWithin(45, 45, 90)).toBe(true);
    });

    it('does not hold the direction at to', () => {
        expect(degreesWithin(90, 45, 90)).toBe(false);
    });

    it('holds a direction before north in a span across north', () => {
        expect(degreesWithin(350, 337.5, 22.5)).toBe(true);
    });

    it('holds a direction after north in a span across north', () => {
        expect(degreesWithin(10, 337.5, 22.5)).toBe(true);
    });

    it('holds north in a span across north', () => {
        expect(degreesWithin(0, 337.5, 22.5)).toBe(true);
    });

    it('does not hold a direction outside a span across north', () => {
        expect(degreesWithin(180, 337.5, 22.5)).toBe(false);
    });

    it('holds a direction of 360 as north', () => {
        expect(degreesWithin(360, 337.5, 22.5)).toBe(true);
    });

    it('holds a direction in a span that ends at 360', () => {
        expect(degreesWithin(350, 315, 360)).toBe(true);
    });

    it('holds a negative direction as its turn', () => {
        expect(degreesWithin(-10, 337.5, 22.5)).toBe(true);
    });
});
