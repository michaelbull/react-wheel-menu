import {
    describe,
    expect,
    it,
} from 'vitest';
import { rotateLabel } from './rotateLabel';

describe('rotateLabel', () => {
    it('rotates downwards', () => {
        expect(rotateLabel('downwards', 45)).toBe(-45);
    });

    it('rotates upwards', () => {
        expect(rotateLabel('upwards', 45)).toBe(135);
    });

    it('rotates inwards', () => {
        expect(rotateLabel('inwards', 45)).toBe(0);
    });

    it('rotates outwards', () => {
        expect(rotateLabel('outwards', 45)).toBe(180);
    });

    it('rotates clockwise', () => {
        expect(rotateLabel('clockwise', 45)).toBe(270);
    });

    it('rotates counterclockwise', () => {
        expect(rotateLabel('counterclockwise', 45)).toBe(90);
    });
});
