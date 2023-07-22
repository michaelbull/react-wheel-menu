import './LeagueOfLegends.css';
import {
    Meta,
    StoryObj
} from '@storybook/react';
import {
    CSSProperties,
    PropsWithChildren,
    ReactNode,
    useState
} from 'react';
import { clsx } from 'clsx';
import {
    Label,
    Layout,
    Radians,
    Segment,
    useElementToMouseAngle,
    Wheel
} from '../../../src';

const meta: Meta = {
    title: 'Examples',
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;

export const LeagueOfLegendsStory: StoryObj = {
    name: 'League of Legends',
    parameters: {
        options: { showPanel: false }
    },
    render: () => {
        return (
            <div className="lol">
                <div className="lol-background" />
                <Menu />
            </div>
        );
    }
};

function Menu() {
    const [indicatorLabel, setIndicatorLabel] = useState<ReactNode>(null);

    function clearIndication() {
        setIndicatorLabel(null);
    }

    function indicateRetreat() {
        setIndicatorLabel(<span style={{ color: 'red' }}>Retreat</span>);
    }

    function indicatePush() {
        setIndicatorLabel(<span style={{ color: 'lightgreen' }}>Push</span>);
    }

    function indicateOnMyWay() {
        setIndicatorLabel(<span style={{ color: 'cyan' }}>On My Way</span>);
    }

    function indicateAllIn() {
        setIndicatorLabel(<span style={{ color: 'yellow' }}>All In</span>);
    }

    function indicateAssistMe() {
        setIndicatorLabel(<span style={{ color: 'lightgreen' }}>Assist Me</span>);
    }

    function indicateHold() {
        setIndicatorLabel(<span style={{ color: 'lightgreen' }}>Hold</span>);
    }

    function indicateEnemyMissing() {
        setIndicatorLabel(<span style={{ color: 'yellow' }}>Enemy Missing</span>);
    }

    function indicateBait() {
        setIndicatorLabel(<span style={{ color: 'yellow' }}>Bait</span>);
    }

    return (
        <Wheel className="lol-menu" onMouseOut={clearIndication}>
            <Ping
                from={337.5}
                to={22.5}
                name="retreat"
                label="Retreat"
                onMouseOver={indicateRetreat}
                onFocus={indicateRetreat}
                onBlur={clearIndication}
                major
            />

            <Ping
                from={22.5}
                to={67.5}
                name="push"
                label="Push"
                onMouseOver={indicatePush}
                onFocus={indicatePush}
                onBlur={clearIndication}
            />

            <Ping
                from={67.5}
                to={112.5}
                name="on-my-way"
                label="On My Way"
                onMouseOver={indicateOnMyWay}
                onFocus={indicateOnMyWay}
                onBlur={clearIndication}
                major
            />

            <Ping
                from={112.5}
                to={157.5}
                name="all-in"
                label="All In"
                onMouseOver={indicateAllIn}
                onFocus={indicateAllIn}
                onBlur={clearIndication}
            />

            <Ping
                from={157.5}
                to={202.5}
                name="assist-me"
                label="Assist Me"
                onMouseOver={indicateAssistMe}
                onFocus={indicateAssistMe}
                onBlur={clearIndication}
                major
            />

            <Ping
                from={202.5}
                to={247.5}
                name="hold"
                label="Hold"
                onMouseOver={indicateHold}
                onFocus={indicateHold}
                onBlur={clearIndication}
            />

            <Ping
                from={247.5}
                to={292.5}
                name="enemy-missing"
                label="Enemy Missing"
                onMouseOver={indicateEnemyMissing}
                onFocus={indicateEnemyMissing}
                onBlur={clearIndication}
                major
            />

            <Ping
                from={292.5}
                to={337.5}
                name="bait"
                label="Bait"
                onMouseOver={indicateBait}
                onFocus={indicateBait}
                onBlur={clearIndication}
            />

            <Indicator>
                {indicatorLabel}
            </Indicator>
        </Wheel>
    );
}

interface PingProps {
    readonly name: string;
    readonly from: number;
    readonly to: number;
    readonly major?: boolean;
    readonly label: string;
    readonly onFocus: () => void;
    readonly onBlur: () => void;
    readonly onMouseOver: () => void;
}

function Ping(props: PingProps) {
    const {
        name,
        major = false,
        label,
        ...rest
    } = props;

    const layoutClassName = clsx('lol-ping__layout', {
        'lol-ping__layout--major': major
    });

    const iconClassName = clsx('lol-ping__icon', `lol-ping__icon--${name}`);

    return (
        <Segment as="button" className="lol-ping" gapBefore={2} gapAfter={2} aria-label={label} {...rest}>
            <Layout className={layoutClassName}>
                <Label offset={-20}>
                    <div className={iconClassName} />
                </Label>
            </Layout>
        </Segment>
    );
}

function Indicator(props: PropsWithChildren) {
    const { children } = props;
    const [mouseOutside, setMouseOutside] = useState(true);

    const {
        ref,
        angle
    } = useElementToMouseAngle();

    function onMouseOver() {
        setMouseOutside(false);
    }

    function onMouseOut() {
        setMouseOutside(true);
    }

    return (
        <div className="lol-ping-indicator" ref={ref} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            {(mouseOutside && angle && children) &&
                <Arrow angle={angle}>
                    {children}
                </Arrow>
            }
        </div>
    );
}

interface ArrowProps {
    readonly angle: Radians;
}

function Arrow(props: PropsWithChildren<ArrowProps>) {
    const {
        angle,
        children
    } = props;

    const style: CSSProperties = {
        transform: `rotate(${angle}rad) translateX(88px)`
    };

    return (
        <>
            <svg className="lol-ping-arrow" style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    className="lol-ping-arrow__bottom"
                    d="M6.5 1H7c1.98 5.77 2.02 15.08 0 22h-.5c2-6.97 2-16.22 0-22z"
                />

                <path
                    className="lol-ping-arrow__center"
                    d="M10.09 7.41h1.38v9.17h-1.38z"
                />

                <path
                    className="lol-ping-arrow__top"
                    d="M10.09 16.58 14.67 12l-4.58-4.59v-2.8L17.5 12c-2.46 2.45-7.4 7.31-7.4 7.31z"
                />
            </svg>

            <span className="lol-ping-indicator__label">
                {children}
            </span>
        </>
    );
}
