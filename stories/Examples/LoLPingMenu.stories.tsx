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
    Slice,
    useElementAngle,
    useMousePosition
} from '../../src';
import {
    Meta,
    StoryObj
} from '@storybook/react';
import './LoLPingMenu.css';

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
    const [wheel, setWheel] = useState<HTMLDivElement | null>(null);
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
        <div className="lol-ping-menu" ref={setWheel}>
            <RadialWheel className="lol-ping-menu__wheel" onMouseOut={clearHover}>

                <Slice className="lol-ping-menu__slice" from={338} to={22}>
                    <Button className="lol-ping-menu__button lol-ping-menu__button--major" onMouseOver={hoverRetreat}>
                        <Label className="lol-ping-menu__label">
                            <img
                                className="lol-ping-menu__icon"
                                src="https://static.wikia.nocookie.net/leagueoflegends/images/e/e8/Retreat_ping_colorblind.png"
                                alt="Retreat"
                                referrerPolicy="no-referrer"
                            />
                        </Label>
                    </Button>
                </Slice>

                <Slice className="lol-ping-menu__slice" from={23} to={67}>
                    <Button className="lol-ping-menu__button" onMouseOver={hoverPush}>
                        <Label className="lol-ping-menu__label">
                            <img
                                className="lol-ping-menu__icon"
                                src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d3/Push_ping_colorblind.png"
                                alt="Push"
                                referrerPolicy="no-referrer"
                            />
                        </Label>
                    </Button>
                </Slice>

                <Slice className="lol-ping-menu__slice" from={68} to={112}>
                    <Button className="lol-ping-menu__button lol-ping-menu__button--major" onMouseOver={hoverOnMyWay}>
                        <Label className="lol-ping-menu__label">
                            <img
                                className="lol-ping-menu__icon"
                                src="https://static.wikia.nocookie.net/leagueoflegends/images/a/a2/On_My_Way_ping_colorblind.png"
                                alt="On My Way"
                                referrerPolicy="no-referrer"
                            />
                        </Label>
                    </Button>
                </Slice>

                <Slice className="lol-ping-menu__slice" from={113} to={157}>
                    <Button className="lol-ping-menu__button" onMouseOver={hoverAllIn}>
                        <Label className="lol-ping-menu__label">
                            <img
                                className="lol-ping-menu__icon"
                                src="https://static.wikia.nocookie.net/leagueoflegends/images/5/59/All_In_ping_colorblind.png"
                                alt="All In"
                                referrerPolicy="no-referrer"
                            />
                        </Label>
                    </Button>
                </Slice>

                <Slice className="lol-ping-menu__slice" from={158} to={202}>
                    <Button className="lol-ping-menu__button lol-ping-menu__button--major" onMouseOver={hoverAssistMe}>
                        <Label className="lol-ping-menu__label">
                            <img
                                className="lol-ping-menu__icon"
                                src="https://static.wikia.nocookie.net/leagueoflegends/images/f/fd/Assist_Me_ping_colorblind.png"
                                alt="Assist Me"
                                referrerPolicy="no-referrer"
                            />
                        </Label>
                    </Button>
                </Slice>

                <Slice className="lol-ping-menu__slice" from={203} to={247}>
                    <Button className="lol-ping-menu__button" onMouseOver={hoverHold}>
                        <Label className="lol-ping-menu__label">
                            <img
                                className="lol-ping-menu__icon"
                                src="https://static.wikia.nocookie.net/leagueoflegends/images/c/c1/Hold_ping_colorblind.png"
                                alt="Hold"
                                referrerPolicy="no-referrer"
                            />
                        </Label>
                    </Button>
                </Slice>

                <Slice className="lol-ping-menu__slice" from={248} to={292}>
                    <Button className="lol-ping-menu__button lol-ping-menu__button--major"
                            onMouseOver={hoverEnemyMissing}>
                        <Label className="lol-ping-menu__label">
                            <img
                                className="lol-ping-menu__icon"
                                src="https://static.wikia.nocookie.net/leagueoflegends/images/d/d1/Enemy_Missing_ping_colorblind.png"
                                alt="Enemy Missing"
                                referrerPolicy="no-referrer"
                            />
                        </Label>
                    </Button>
                </Slice>

                <Slice className="lol-ping-menu__slice" from={293} to={337}>
                    <Button className="lol-ping-menu__button" onMouseOver={hoverBait}>
                        <Label className="lol-ping-menu__label">
                            <img
                                className="lol-ping-menu__icon"
                                src="https://static.wikia.nocookie.net/leagueoflegends/images/c/ca/Bait_ping_colorblind.png"
                                alt="Bait"
                                referrerPolicy="no-referrer"
                            />
                        </Label>
                    </Button>
                </Slice>

                <Indicator>
                    {indicatorLabel}
                </Indicator>
            </RadialWheel>
        </div>
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
