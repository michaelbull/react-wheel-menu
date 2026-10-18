import type {
    Meta,
    StoryObj,
} from '@storybook/react-vite';
import {
    type CSSProperties,
    type PointerEvent,
    useEffect,
    useState,
} from 'react';
import { Label } from '../../../label/Label';
import { Layout } from '../../../layout/Layout';
import type { Point } from '../../../pointer/Point';
import { Segment } from '../../../segment/Segment';
import { useWheelSelection } from '../../../selection/useWheelSelection';
import { DirectionalWheel } from '../../../wheel/DirectionalWheel';
import './Flick.css';
import source from './Flick.stories.tsx?raw';

const meta = {
    title: 'Examples',
    parameters: {
        docs: {
            source: {
                code: source,
            },
        },
        layout: 'fullscreen',
    },
} satisfies Meta;

export default meta;

const ACTIONS = [
    'Undo',
    'Copy',
    'Paste',
    'Delete',
    'Redo',
    'Cut',
    'Select',
    'Save',
] as const;

const SEGMENT_DEGREES = 45;
const NORTH_SEGMENT_FROM = -22.5;
const DEAD_ZONE = 0.3;

interface ActionSegmentProps {
    readonly index: number;
    readonly action: string;
}

function ActionSegment(props: ActionSegmentProps) {
    const {
        index,
        action,
    } = props;

    const from = NORTH_SEGMENT_FROM + (index * SEGMENT_DEGREES);
    const to = from + SEGMENT_DEGREES;

    return (
        <Segment className="flick__segment" value={action} from={from} to={to}>
            <Layout>
                <Label offset={-15}>{action}</Label>
            </Layout>
        </Segment>
    );
}

interface ReleaseProps {
    readonly onRelease: (active: string | null) => void;
}

/**
 * Reads the active segment when the pointer is let go. The wheel does not call back: the app
 * decides when the gesture ends and reads the selection then.
 */
function Release(props: ReleaseProps) {
    const { onRelease } = props;
    const { active } = useWheelSelection();

    useEffect(() => {
        function onPointerUp() {
            onRelease(active);
        }

        window.addEventListener('pointerup', onPointerUp);

        return function cleanup() {
            window.removeEventListener('pointerup', onPointerUp);
        };
    }, [active, onRelease]);

    return null;
}

interface FlickWheelProps {
    readonly origin: Point;
    readonly onRelease: (active: string | null) => void;
}

function FlickWheel(props: FlickWheelProps) {
    const {
        origin,
        onRelease,
    } = props;

    const [left, top] = origin;

    const style: CSSProperties = {
        left,
        top,
    };

    return (
        <DirectionalWheel className="flick__wheel" style={style} deadZone={DEAD_ZONE} initialPointer={origin}>
            {ACTIONS.map((action, index) => <ActionSegment key={action} index={index} action={action} />)}
            <span className="flick__cancel">Cancel</span>
            <Release onRelease={onRelease} />
        </DirectionalWheel>
    );
}

interface StatusProps {
    readonly open: boolean;
    readonly chosen: string | null | undefined;
}

function Status(props: StatusProps) {
    const {
        open,
        chosen,
    } = props;

    if (open) {
        return <p className="flick__status">Flick towards an action and let go, or let go in the middle to cancel</p>;
    } else if (chosen === undefined) {
        return <p className="flick__status">Hold the mouse button anywhere</p>;
    } else if (chosen === null) {
        return <p className="flick__status">Cancelled</p>;
    } else {
        return <p className="flick__status">Chose {chosen}</p>;
    }
}

function FlickCanvas() {
    const [origin, setOrigin] = useState<Point | null>(null);
    const [chosen, setChosen] = useState<string | null | undefined>(undefined);

    function onPointerDown(event: PointerEvent<HTMLDivElement>) {
        setOrigin([event.clientX, event.clientY]);
    }

    function onRelease(active: string | null) {
        setChosen(active);
        setOrigin(null);
    }

    return (
        <div className="flick" onPointerDown={onPointerDown}>
            <Status open={origin !== null} chosen={chosen} />
            {origin !== null && <FlickWheel origin={origin} onRelease={onRelease} />}
        </div>
    );
}

export const Flick: StoryObj = {
    render: () => <FlickCanvas />,
};
