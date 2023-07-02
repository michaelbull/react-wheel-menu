import {
    useLayoutEffect,
    useState
} from 'react';

export interface UseElementAngleProps {
    readonly element: Element;
    readonly x: number;
    readonly y: number;
}

export function useElementAngle(props: UseElementAngleProps): number | null {
    const {
        element,
        x: x2,
        y: y2
    } = props;

    const rect = useElementRect(element);

    if (rect === null) {
        return null;
    } else {
        const [x1, y1] = midpoint(rect);
        return angleBetween(x1, y1, x2, y2);
    }
}

function useElementRect(element: Element): DOMRect | null {
    const [rect, setRect] = useState<DOMRect | null>(null);

    useLayoutEffect(() => {
        setRect(element.getBoundingClientRect());
    }, [element]);

    return rect;
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
