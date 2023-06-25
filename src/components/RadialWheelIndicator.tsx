import React, {
    CSSProperties,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';
import { RadialWheelArrow } from './RadialWheelArrow';

const DEFAULT_SIZE = '50px';
const DEFAULT_ARROW_SIZE = '20px';
const DEFAULT_ARROW_OFFSET = '40px';

export interface RadialWheelIndicatorProps {
    readonly size?: string;
    readonly arrowSize?: string;
    readonly arrowOffset?: string;
}

export function RadialWheelIndicator(props: RadialWheelIndicatorProps) {
    const {
        size = DEFAULT_SIZE,
        arrowSize = DEFAULT_ARROW_SIZE,
        arrowOffset = DEFAULT_ARROW_OFFSET
    } = props;

    const ref = useRef<HTMLDivElement>(null);
    const [angle, setAngle] = useState<number | null>(null);

    const style: CSSProperties = {
        width: size,
        height: size
    };

    const onMouseMove = useCallback((event: MouseEvent) => {
        const element = ref.current;

        if (element !== null) {
            const rect = element.getBoundingClientRect();
            const x2 = event.x;
            const y2 = event.y;

            if (contains(rect, x2, y2)) {
                setAngle(-1);
            } else {
                const x1 = rect.x + (rect.width / 2);
                const y1 = rect.y + (rect.height / 2);

                const deltaX = x2 - x1;
                const deltaY = y2 - y1;

                setAngle(angleDegrees(deltaX, deltaY));
            }
        }
    }, [ref]);

    useEffect(() => {
        addEventListener('mousemove', onMouseMove);

        return function cleanup() {
            removeEventListener('mousemove', onMouseMove);
        };
    }, [onMouseMove]);

    return (
        <div className="radial-wheel-indicator" style={style} aria-hidden ref={ref}>
            {angle !== null &&
                <RadialWheelArrow
                    angle={angle}
                    size={arrowSize}
                    offset={arrowOffset}
                />
            }
        </div>
    );
}

function contains(rect: DOMRect, x: number, y: number): boolean {
    return x >= rect.x && y >= rect.y && x <= rect.x + rect.width && y <= rect.y + rect.height;
}

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2 */
function angleDegrees(x: number, y: number): number {
    return Math.atan2(y, x) * 180 / Math.PI;
}
