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
import { Label } from '../label/Label';
import { Layout } from '../layout/Layout';
import { Spoke } from './Spoke';

describe('Spoke', () => {
    afterEach(() => {
        cleanup();
    });

    it('rotates itself to its angle', () => {
        render(<Spoke angle={90} data-testid="spoke" />);

        expect(screen.getByTestId('spoke').style.transform).toBe('rotate(90deg)');
    });

    it('gives its angle to the labels inside it', () => {
        render(
            <Spoke angle={90}>
                <Layout>
                    <Label data-testid="label">East</Label>
                </Layout>
            </Spoke>,
        );

        expect(screen.getByTestId('label').style.transform).toBe('rotate(-90deg)');
    });

    it('renders the element given as as', () => {
        render(<Spoke as="div" angle={90} data-testid="spoke" />);

        expect(screen.getByTestId('spoke').tagName).toBe('DIV');
    });
});
