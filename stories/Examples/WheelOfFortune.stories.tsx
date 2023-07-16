import React, {
    CSSProperties,
    PropsWithChildren
} from 'react';
import {
    CircleMenu,
    Label,
    Layout,
    Slice
} from '../../src';
import {
    Meta,
    StoryObj
} from '@storybook/react';
import './WheelOfFortune.css';

const meta: Meta = {
    title: 'Examples',
    parameters: {
        layout: 'centered'
    }
};

export default meta;

export const WheelOfFortuneStory: StoryObj = {
    name: 'Wheel of Fortune',
    render: () => <WheelOfFortune />
};

function WheelOfFortune() {
    return (
        <CircleMenu className="wheel-of-fortune">
            <Prize from={352.5} to={7.5} backgroundColor="hsl(57, 100%, 50%)" price>
                2000
            </Prize>

            <Prize from={7.5} to={22.5} backgroundColor="hsl(0, 0%, 0%)" color="white" fontSize="1.75rem">
                Bankrupt
            </Prize>

            <Prize from={22.5} to={37.5} backgroundColor="hsl(321, 70%, 41%)" price>
                650
            </Prize>

            <Prize from={37.5} to={52.5} backgroundColor="hsl(163, 100%, 39%)" price>
                1250
            </Prize>

            <Prize from={52.5} to={67.5} backgroundColor="hsl(23, 92%, 54%)" price>
                500
            </Prize>

            <Prize from={67.5} to={82.5} backgroundColor="hsl(5, 87%, 54%)" price>
                800
            </Prize>

            <Prize from={82.5} to={97.5} backgroundColor="white" fontSize="1.75rem">
                <span style={{
                    fontSize: '1.5rem',
                    letterSpacing: 0,
                    writingMode: 'horizontal-tb',
                    textOrientation: 'mixed'
                }}>
                    Lose
                </span>
                a
                Turn
            </Prize>

            <Prize from={97.5} to={112.5} backgroundColor="hsl(190, 100%, 43%)" price>
                900
            </Prize>

            <Prize from={112.5} to={127.5} backgroundColor="hsl(341, 73%, 77%)" price>
                1000
            </Prize>

            <Prize from={127.5} to={142.5} backgroundColor="hsl(163, 100%, 38%)" price>
                600
            </Prize>

            <Prize from={142.5} to={157.5} backgroundColor="hsl(0, 0%, 0%)" color="white" fontSize="1.75rem">
                Bankrupt
            </Prize>

            <Prize from={157.5} to={172.5} backgroundColor="hsl(57, 100%, 50%)" price>
                550
            </Prize>

            <Prize from={172.5} to={187.5} backgroundColor="hsl(163, 100%, 38%)" price>
                700
            </Prize>

            <Prize from={187.5} to={202.5} backgroundColor="hsl(5, 87%, 54%)" price>
                1500
            </Prize>

            <Prize from={202.5} to={217.5} backgroundColor="hsl(23, 90%, 54%)" price>
                750
            </Prize>

            <Prize from={217.5} to={232.5} backgroundColor="hsl(190, 100%, 43%)" price>
                500
            </Prize>

            <Prize from={232.5} to={247.5} backgroundColor="hsl(200, 5%, 68%)">
                &nbsp;
            </Prize>

            <Prize from={247.5} to={262.5} backgroundColor="hsl(321, 70%, 40%)" price>
                900
            </Prize>

            <Prize from={262.5} to={277.5} backgroundColor="hsl(57, 100%, 50%)" price>
                800
            </Prize>

            <Prize from={277.5} to={292.5} backgroundColor="hsl(5, 87%, 54%)" price>
                1000
            </Prize>

            <Prize from={292.5} to={307.5} backgroundColor="hsl(44, 87%, 54%)" price>
                600
            </Prize>

            <Prize from={307.5} to={322.5} backgroundColor="hsl(341, 73%, 77%)" price>
                550
            </Prize>

            <Prize from={322.5} to={337.5} backgroundColor="hsl(163, 100%, 38%)" price>
                000
            </Prize>

            <Prize from={337.5} to={352.5} backgroundColor="hsl(190, 100%, 43%)" price>
                975
            </Prize>

            <div className="wheel-of-fortune__center" />
        </CircleMenu>
    );
}

interface PrizeProps {
    readonly from: number;
    readonly to: number;
    readonly fontSize?: CSSProperties['fontSize'];
    readonly color?: CSSProperties['color'];
    readonly backgroundColor?: CSSProperties['backgroundColor'];
    readonly price?: boolean;
}

function Prize(props: PropsWithChildren<PrizeProps>) {
    const {
        from,
        to,
        fontSize = '3rem',
        color = 'black',
        backgroundColor = 'white',
        price = false,
        children
    } = props;

    return (
        <Slice as="button" className="wheel-of-fortune__prize " style={{ backgroundColor }} from={from} to={to}
               gapBefore={1} gapAfter={1}>
            <Layout justify="end" direction="vertical">
                <Label orient="inwards" justify="center" offset={10}>
                    <span className="wheel-of-fortune__label" style={{ color, fontSize }}>
                        {price &&
                            <span className="wheel-of-fortune__price">$</span>
                        }

                        <span>{children}</span>
                    </span>
                </Label>
            </Layout>
        </Slice>
    );
}
