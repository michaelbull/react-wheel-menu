/**
 * @vitest-environment jsdom
 */
import {
    cleanup,
    render,
    screen,
} from '@testing-library/react';
import {
    afterEach,
    describe,
    expect,
    it,
} from 'vitest';
import { Ring } from './Ring';
import { useRingState } from './useRingState';

function RingProbe() {
    const { inner, outer } = useRingState();
    return <span data-testid="ring">{`${inner}-${outer}`}</span>;
}

describe('Ring', () => {
    afterEach(() => {
        cleanup();
    });

    it('gives its radii to its children', () => {
        render(
            <Ring inner={0.25} outer={0.6}>
                <RingProbe />
            </Ring>,
        );

        expect(screen.getByTestId('ring').textContent).toBe('0.25-0.6');
    });

    it('gives the whole wheel to children outside a ring', () => {
        render(<RingProbe />);

        expect(screen.getByTestId('ring').textContent).toBe('0-1');
    });

    it('renders the element given as as', () => {
        render(<Ring as="section" data-testid="element" />);

        expect(screen.getByTestId('element').tagName).toBe('SECTION');
    });
});
