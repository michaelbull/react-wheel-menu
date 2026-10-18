import type {
    Meta,
    StoryObj,
} from '@storybook/react-vite';
import { Label } from '../../../label/Label';
import { Layout } from '../../../layout/Layout';
import { Ring } from '../../../ring/Ring';
import { Segment } from '../../../segment/Segment';
import { Wheel } from '../../../wheel/Wheel';
import './Rings.css';

const meta = {
    title: 'Examples',
    parameters: {
        layout: 'centered',
    },
} satisfies Meta;

export default meta;

const COMPASS = [
    'N',
    'NE',
    'E',
    'SE',
    'S',
    'SW',
    'W',
    'NW',
] as const;

const SEGMENT_DEGREES = 45;
const NORTH_SEGMENT_FROM = -22.5;

interface CompassSegmentProps {
    readonly index: number;
    readonly label: string;
}

function CompassSegment(props: CompassSegmentProps) {
    const {
        index,
        label,
    } = props;

    const from = NORTH_SEGMENT_FROM + (index * SEGMENT_DEGREES);
    const to = from + SEGMENT_DEGREES;

    return (
        <Segment className="rings-segment" from={from} to={to}>
            <Layout>
                <Label>{label}</Label>
            </Layout>
        </Segment>
    );
}

export const Rings: StoryObj = {
    render: () => (
        <Wheel className="rings">
            <Ring className="rings-ring--outer" inner={0.6} outer={1}>
                {COMPASS.map((label, index) => <CompassSegment key={label} index={index} label={`Far ${label}`} />)}
            </Ring>

            <Ring className="rings-ring--inner" inner={0.25} outer={0.6}>
                {COMPASS.map((label, index) => <CompassSegment key={label} index={index} label={label} />)}
            </Ring>
        </Wheel>
    ),
};
