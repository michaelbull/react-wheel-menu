import React, {
    CSSProperties,
    PropsWithChildren,
    ReactNode,
    useState
} from 'react';
import {
    Button,
    CircleMenu,
    Label,
    Slice as CircleMenuSlice,
    useAngleToElement,
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
    const [mouseX, mouseY] = useMousePosition();

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
        <CircleMenu className="lol-ping-menu" onMouseOut={clearIndication}>
            <Slice
                from={337.5}
                to={22.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/Retreat_ping_colorblind.png"
                alt="Retreat"
                onMouseOver={indicateRetreat}
                onFocus={indicateRetreat}
                onBlur={clearIndication}
                major
            />

            <Slice
                from={22.5}
                to={67.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Push_ping_colorblind.png"
                alt="Push"
                onMouseOver={indicatePush}
                onFocus={indicatePush}
                onBlur={clearIndication}
            />

            <Slice
                from={67.5}
                to={112.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/a/a2/On_My_Way_ping_colorblind.png"
                alt="On My Way"
                onMouseOver={indicateOnMyWay}
                onFocus={indicateOnMyWay}
                onBlur={clearIndication}
                major
            />

            <Slice
                from={112.5}
                to={157.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/5/59/All_In_ping_colorblind.png"
                alt="All In"
                onMouseOver={indicateAllIn}
                onFocus={indicateAllIn}
                onBlur={clearIndication}
            />

            <Slice
                from={157.5}
                to={202.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/f/fd/Assist_Me_ping_colorblind.png"
                alt="Assist Me"
                onMouseOver={indicateAssistMe}
                onFocus={indicateAssistMe}
                onBlur={clearIndication}
                major
            />

            <Slice
                from={202.5}
                to={247.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/c/c1/Hold_ping_colorblind.png"
                alt="Hold"
                onMouseOver={indicateHold}
                onFocus={indicateHold}
                onBlur={clearIndication}
            />

            <Slice
                from={247.5}
                to={292.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d1/Enemy_Missing_ping_colorblind.png"
                alt="Enemy Missing"
                onMouseOver={indicateEnemyMissing}
                onFocus={indicateEnemyMissing}
                onBlur={clearIndication}
                major
            />

            <Slice
                from={292.5}
                to={337.5}
                src="https://static.wikia.nocookie.net/leagueoflegends/images/c/ca/Bait_ping_colorblind.png"
                alt="Bait"
                onMouseOver={indicateBait}
                onFocus={indicateBait}
                onBlur={clearIndication}
            />

            <Indicator x={mouseX} y={mouseY}>
                {indicatorLabel}
            </Indicator>
        </CircleMenu>
    );
}

interface SliceProps {
    readonly from: number;
    readonly to: number;
    readonly major?: boolean;
    readonly src: string;
    readonly alt: string;
    readonly onFocus: () => void;
    readonly onBlur: () => void;
    readonly onMouseOver: () => void;
}

function Slice(props: SliceProps) {
    const {
        from,
        to,
        major = false,
        src,
        alt,
        onFocus,
        onBlur,
        onMouseOver
    } = props;

    const className = clsx('lol-ping-menu__button', {
        'lol-ping-menu__button--major': major
    });

    return (
        <CircleMenuSlice className="lol-ping-menu__slice" from={from} to={to} gapBefore={2} gapAfter={2}>
            <Button className={className} onFocus={onFocus} onBlur={onBlur} onMouseOver={onMouseOver}>
                <Label className="lol-ping-menu__label" offset={-20}>
                    <img
                        className="lol-ping-menu__icon"
                        src={src}
                        alt={alt}
                        referrerPolicy="no-referrer"
                    />
                </Label>
            </Button>
        </CircleMenuSlice>
    );
}

interface IndicatorProps {
    readonly x: number;
    readonly y: number;
}

function Indicator(props: PropsWithChildren<IndicatorProps>) {
    const {
        x,
        y,
        children
    } = props;

    const [indicator, setIndicator] = useState<HTMLDivElement | null>(null);
    const [mouseOutside, setMouseOutside] = useState(true);

    function onMouseOver() {
        setMouseOutside(false);
    }

    function onMouseOut() {
        setMouseOutside(true);
    }

    return (
        <div className="lol-ping-menu-indicator" ref={setIndicator} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            {indicator &&
                <Arrow x={x} y={y} parent={indicator} mouseOutside={mouseOutside}>
                    {children}
                </Arrow>
            }
        </div>
    );
}

interface ArrowProps {
    readonly x: number,
    readonly y: number;
    readonly parent: Element;
    readonly mouseOutside: boolean;
}

function Arrow(props: PropsWithChildren<ArrowProps>) {
    const {
        x,
        y,
        parent,
        mouseOutside,
        children
    } = props;

    const angle = useAngleToElement({
        element: parent,
        x,
        y
    });

    const show = mouseOutside && angle !== null && children !== null;

    const style: CSSProperties = {
        transform: `rotate(${angle}rad) translateX(182%)`
    };

    if (show) {
        return (
            <>
                <svg className="lol-ping-menu-arrow" style={style} viewBox="0 0 24 24">
                    <path
                        className="lol-ping-menu-arrow__bottom"
                        d="M5 1h.5c1.98 5.77 2.02 15.08 0 22H5C7 16.03 7 6.78 5 1Z"
                    />

                    <path
                        className="lol-ping-menu-arrow__center"
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
        );
    } else {
        return null;
    }
}
