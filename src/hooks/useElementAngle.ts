import { useState } from 'react';

export interface UseElementAngleProps {
    readonly element: Element | null;
    readonly x: number;
    readonly y: number;
}

export function useElementAngle(props: UseElementAngleProps): number | null {
    const {
        element,
        x,
        y
    } = props;

    const [prevElement, setPrevElement] = useState(element);
    const [prevX, setPrevX] = useState(x);
    const [prevY, setPrevY] = useState(y);
    const [angle, setAngle] = useState<number | null>(null);

    const moved = x !== prevX || y !== prevY;
    const elementChanged = element !== prevElement;
    const changed = moved || elementChanged;

    if (changed) {
        setPrevElement(element);
        setPrevX(x);
        setPrevY(y);

        if (element === null) {
            setAngle(null);
        } else {
            setAngle(angleToElement(x, y, element));
        }
    }

    return angle;
}

function angleToElement(x: number, y: number, element: Element) {
    const rect = element.getBoundingClientRect();
    const [midpointX, midpointY] = midpoint(rect);
    return angleBetween(midpointX, midpointY, x, y);
}

function midpoint(rect: DOMRect): [number, number] {
    const x = rect.x + (rect.width / 2);
    const y = rect.y + (rect.height / 2);
    return [x, y];
}

function angleBetween(x1: number, y1: number, x2: number, y2: number): number {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return angleDegrees(deltaX, deltaY);
}

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2 */
function angleDegrees(x: number, y: number): number {
    return Math.atan2(y, x) * 180 / Math.PI;
}
