import React, {
    CSSProperties,
    PropsWithChildren,
    ReactNode,
    useState
} from 'react';
import {
    Button,
    Label,
    RadialWheel,
    Slice as RadialWheelSlice,
    useElementAngle,
    useMousePosition
} from '../../src';
import {
    Meta,
    StoryObj
} from '@storybook/react';
import './LoLPingMenu.css';
import clsx from 'clsx';

const meta: Meta = {
    title: 'Examples',
    parameters: {
        layout: 'centered'
    }
};

export default meta;

export const LoLPingMenuStory: StoryObj = {
    name: 'LoL Ping Menu',
    render: () => <LoLPingMenu />
};

function LoLPingMenu() {
    const [indicatorLabel, setIndicatorLabel] = useState<ReactNode>(null);

    function clearHover() {
        setIndicatorLabel(null);
    }

    function hoverRetreat() {
        setIndicatorLabel(<span style={{ color: 'red' }}>Retreat</span>);
    }

    function hoverPush() {
        setIndicatorLabel(<span style={{ color: 'lightgreen' }}>Push</span>);
    }

    function hoverOnMyWay() {
        setIndicatorLabel(<span style={{ color: 'cyan' }}>On My Way</span>);
    }

    function hoverAllIn() {
        setIndicatorLabel(<span style={{ color: 'yellow' }}>All In</span>);
    }

    function hoverAssistMe() {
        setIndicatorLabel(<span style={{ color: 'lightgreen' }}>Assist Me</span>);
    }

    function hoverHold() {
        setIndicatorLabel(<span style={{ color: 'lightgreen' }}>Hold</span>);
    }

    function hoverEnemyMissing() {
        setIndicatorLabel(<span style={{ color: 'yellow' }}>Enemy Missing</span>);
    }

    function hoverBait() {
        setIndicatorLabel(<span style={{ color: 'yellow' }}>Bait</span>);
    }

    return (
        <RadialWheel className="lol-ping-menu" onMouseOut={clearHover}>
            <Slice
                from={337.5}
                to={22.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/Retreat_ping_colorblind.png"
                alt="Retreat"
                onMouseOver={hoverRetreat}
                major
            />

            <Slice
                from={22.5}
                to={67.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Push_ping_colorblind.png"
                alt="Push"
                onMouseOver={hoverPush}
            />

            <Slice
                from={67.5}
                to={112.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/a/a2/On_My_Way_ping_colorblind.png"
                alt="On My Way"
                onMouseOver={hoverOnMyWay}
                major
            />

            <Slice
                from={112.5}
                to={157.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/5/59/All_In_ping_colorblind.png"
                alt="All In"
                onMouseOver={hoverAllIn}
            />

            <Slice
                from={157.5}
                to={202.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/f/fd/Assist_Me_ping_colorblind.png"
                alt="Assist Me"
                onMouseOver={hoverAssistMe}
                major
            />

            <Slice
                from={202.5}
                to={247.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/c/c1/Hold_ping_colorblind.png"
                alt="Hold"
                onMouseOver={hoverHold}
            />

            <Slice
                from={247.5}
                to={292.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d1/Enemy_Missing_ping_colorblind.png"
                alt="Enemy Missing"
                onMouseOver={hoverEnemyMissing}
                major
            />

            <Slice
                from={292.5}
                to={337.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/c/ca/Bait_ping_colorblind.png"
                alt="Bait"
                onMouseOver={hoverBait}
            />

            <Indicator>
                {indicatorLabel}
            </Indicator>
        </RadialWheel>
    );
}

interface SliceProps {
    readonly from: number;
    readonly to: number;
    readonly major?: boolean;
    readonly src: string;
    readonly alt: string;
    readonly onMouseOver: () => void;
}

function Slice(props: SliceProps) {
    const {
        from,
        to,
        major = false,
        src,
        alt,
        onMouseOver
    } = props;

    const className = clsx('lol-ping-menu__button', {
        'lol-ping-menu__button--major': major
    });

    return (
        <RadialWheelSlice className="lol-ping-menu__slice" from={from} to={to} gapBefore={2} gapAfter={2}>
            <Button className={className} onMouseOver={onMouseOver}>
                <Label className="lol-ping-menu__label">
                    <img
                        className="lol-ping-menu__icon"
                        src={src}
                        alt={alt}
                        referrerPolicy="no-referrer"
                    />
                </Label>
            </Button>
        </RadialWheelSlice>
    );
}

function Indicator(props: PropsWithChildren<unknown>) {
    const { children } = props;
    const [indicator, setIndicator] = useState<HTMLDivElement | null>(null);
    const [mouseX, mouseY] = useMousePosition();
    const [hovered, setHovered] = useState(false);

    const angle = useElementAngle({
        element: indicator,
        x: mouseX,
        y: mouseY
    });

    const show = !hovered && angle !== null && children !== null;

    const arrowStyle: CSSProperties = {
        transform: `rotate(${angle}deg) translateX(182%)`
    };

    function onMouseOver() {
        setHovered(true);
    }

    function onMouseOut() {
        setHovered(false);
    }

    return (
        <div className="lol-ping-menu-indicator" ref={setIndicator} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            {show &&
                <>
                    <svg className="lol-ping-menu-arrow" style={arrowStyle} viewBox="0 0 24 24">
                        <path
                            className="lol-ping-menu-arrow__bottom"
                            d="M5 1h.5c1.98 5.77 2.02 15.08 0 22H5C7 16.03 7 6.78 5 1Z"
                        />

                        <path
                            className="lol-ping-menu-arrow__middle"
                            d="M8.59 7.41h1.38v9.17H8.59z"
                        />

                        <path
                            className="lol-ping-menu-arrow__top"
                            d="M8.59 16.58 13.17 12 8.59 7.41v-2.8L16 12c-2.46 2.45-7.4 7.31-7.4 7.31z"
                        />
                    </svg>

                    <span className="lol-ping-menu-indicator__label">
                        {children}
                    </span>
                </>
            }
        </div>
    );
}
