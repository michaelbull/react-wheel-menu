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
    CircleMenu,
    Label,
    Layout,
    Midpoint,
    Segment,
    useElementMidpoint,
    useMouseAngle
} from '../../src';

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
        <CircleMenu className="lol-menu" onMouseOut={clearIndication}>
            <Ping
                from={337.5}
                to={22.5}
                label="Retreat"
                src="https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/Retreat_ping_colorblind.png"
                onMouseOver={indicateRetreat}
                onFocus={indicateRetreat}
                onBlur={clearIndication}
                major
            />

            <Ping
                from={22.5}
                to={67.5}
                label="Push"
                src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Push_ping_colorblind.png"
                onMouseOver={indicatePush}
                onFocus={indicatePush}
                onBlur={clearIndication}
            />

            <Ping
                from={67.5}
                to={112.5}
                label="On My Way"
                src="https://static.wikia.nocookie.net/leagueoflegends/images/a/a2/On_My_Way_ping_colorblind.png"
                onMouseOver={indicateOnMyWay}
                onFocus={indicateOnMyWay}
                onBlur={clearIndication}
                major
            />

            <Ping
                from={112.5}
                to={157.5}
                label="All In"
                src="https://static.wikia.nocookie.net/leagueoflegends/images/5/59/All_In_ping_colorblind.png"
                onMouseOver={indicateAllIn}
                onFocus={indicateAllIn}
                onBlur={clearIndication}
            />

            <Ping
                from={157.5}
                to={202.5}
                label="Assist Me"
                src="https://static.wikia.nocookie.net/leagueoflegends/images/f/fd/Assist_Me_ping_colorblind.png"
                onMouseOver={indicateAssistMe}
                onFocus={indicateAssistMe}
                onBlur={clearIndication}
                major
            />

            <Ping
                from={202.5}
                to={247.5}
                label="Hold"
                src="https://static.wikia.nocookie.net/leagueoflegends/images/c/c1/Hold_ping_colorblind.png"
                onMouseOver={indicateHold}
                onFocus={indicateHold}
                onBlur={clearIndication}
            />

            <Ping
                from={247.5}
                to={292.5}
                label="Enemy Missing"
                src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d1/Enemy_Missing_ping_colorblind.png"
                onMouseOver={indicateEnemyMissing}
                onFocus={indicateEnemyMissing}
                onBlur={clearIndication}
                major
            />

            <Ping
                from={292.5}
                to={337.5}
                label="Bait"
                src="https://static.wikia.nocookie.net/leagueoflegends/images/c/ca/Bait_ping_colorblind.png"
                onMouseOver={indicateBait}
                onFocus={indicateBait}
                onBlur={clearIndication}
            />

            <Indicator>
                {indicatorLabel}
            </Indicator>
        </CircleMenu>
    );
}

interface PingProps {
    readonly from: number;
    readonly to: number;
    readonly major?: boolean;
    readonly src: string;
    readonly label: string;
    readonly onFocus: () => void;
    readonly onBlur: () => void;
    readonly onMouseOver: () => void;
}

function Ping(props: PingProps) {
    const {
        major = false,
        src,
        label,
        ...rest
    } = props;

    const layoutClassName = clsx('lol-ping__button', {
        'lol-ping__button--major': major
    });

    return (
        <Segment as="button" className="lol-ping" gapBefore={2} gapAfter={2} aria-label={label} {...rest}>
            <Layout className={layoutClassName}>
                <Label offset={-20}>
                    <img
                        className="lol-ping__icon"
                        src={src}
                        alt={`"${label}" ping icon`}
                        referrerPolicy="no-referrer"
                    />
                </Label>
            </Layout>
        </Segment>
    );
}

function Indicator(props: PropsWithChildren) {
    const { children } = props;
    const [mouseOutside, setMouseOutside] = useState(true);

    const {
        midpoint,
        setElement: ref
    } = useElementMidpoint();

    function onMouseOver() {
        setMouseOutside(false);
    }

    function onMouseOut() {
        setMouseOutside(true);
    }

    return (
        <div className="lol-ping-indicator" ref={ref} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            {midpoint &&
                <Arrow midpoint={midpoint} mouseOutside={mouseOutside}>
                    {children}
                </Arrow>
            }
        </div>
    );
}

interface ArrowProps {
    readonly midpoint: Midpoint;
    readonly mouseOutside: boolean;
}

function Arrow(props: PropsWithChildren<ArrowProps>) {
    const {
        midpoint,
        mouseOutside,
        children
    } = props;

    const [x, y] = midpoint;
    const angle = useMouseAngle({ x, y });
    const show = mouseOutside && angle !== null && children !== null;

    const style: CSSProperties = {
        transform: `rotate(${angle}rad) translateX(182%)`
    };

    if (show) {
        return (
            <>
                <svg className="lol-ping-arrow" style={style} viewBox="0 0 24 24">
                    <path
                        className="lol-ping-arrow__bottom"
                        d="M5 1h.5c1.98 5.77 2.02 15.08 0 22H5C7 16.03 7 6.78 5 1Z"
                    />

                    <path
                        className="lol-ping-arrow__center"
                        d="M8.59 7.41h1.38v9.17H8.59z"
                    />

                    <path
                        className="lol-ping-arrow__top"
                        d="M8.59 16.58 13.17 12 8.59 7.41v-2.8L16 12c-2.46 2.45-7.4 7.31-7.4 7.31z"
                    />
                </svg>

                <span className="lol-ping-indicator__label">
                    {children}
                </span>
            </>
        );
    } else {
        return null;
    }
}
