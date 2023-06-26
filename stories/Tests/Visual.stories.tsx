import React, { CSSProperties } from 'react';
import {
    RadialWheel,
    RadialWheelButton,
    RadialWheelButtonProps
} from '../../src';
import {
    Meta,
    StoryObj
} from '@storybook/react';
import { RadialWheelLabel } from '../../src/components/RadialWheelLabel';
import { RadialWheelSlice } from '../../src/components/RadialWheelSlice';

const meta: Meta<typeof RadialWheel> = {
    title: 'Tests/Visual',
    component: RadialWheel,
    parameters: {
        layout: 'centered'
    }
}

export default meta;

const style: CSSProperties = {
    width: 300,
    height: 300
}

type Story = StoryObj<typeof RadialWheel>;

export const Polar: Story = {
    render: (props) => {
        return (
            <RadialWheel style={style} {...props}>
                <ButtonTest background="red" height={20}>
                    Red
                </ButtonTest>

                <ButtonTest background="yellow" height={100}>
                    Yellow
                </ButtonTest>
            </RadialWheel>
        );
    },
    args: {
        startAngle: 0,
        endAngle: 360,
        direction: 'cw'
    }
}

export const Acute: Story = {
    render: (props) => {
        return (
            <RadialWheel style={style} {...props}>
                <ButtonTest background="red" height={20}>
                    Red
                </ButtonTest>

                <ButtonTest background="yellow" height={20}>
                    Yellow
                </ButtonTest>

                <ButtonTest background="pink" height={20}>
                    Pink
                </ButtonTest>

                <ButtonTest background="green" height={20}>
                    Green
                </ButtonTest>

                <ButtonTest background="purple" height={20}>
                    Purple
                </ButtonTest>

                <ButtonTest background="orange" height={20}>
                    Orange
                </ButtonTest>
            </RadialWheel>
        );
    },
    args: {
        startAngle: 0,
        direction: 'cw'
    }
}


export const Obtuse: Story = {
    render: (props) => {
        return (
            <RadialWheel style={style} {...props}>
                <ButtonTest background="red" height={60}>
                    Red
                </ButtonTest>

                <ButtonTest background="green" height={50}>
                    Green
                </ButtonTest>

                <ButtonTest background="blue" height={20}>
                    Blue
                </ButtonTest>
            </RadialWheel>
        );
    },
    args: {
        startAngle: -60,
        endAngle: 300,
        direction: 'cw'
    }
}

interface ButtonTestProps extends RadialWheelButtonProps {
    readonly background: CSSProperties['background'];
    readonly height: number;
}

function ButtonTest(props: ButtonTestProps) {
    const {
        background,
        height,
        children,
        ...rest
    } = props;

    const style: CSSProperties = {
        background
    };

    const labelStyle: CSSProperties = {
        background: 'hsla(0, 0%, 0%, 0.3)'
    };

    const contentStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height,
        color: 'white',
        background: 'hsla(0, 0%, 0%, 0.3)'
    };

    return (
        <RadialWheelSlice>
            <RadialWheelButton style={style} {...rest}>
                <RadialWheelLabel style={labelStyle}>
                    <span style={contentStyle}>
                        <span>{children}</span>
                    </span>
                </RadialWheelLabel>
            </RadialWheelButton>
        </RadialWheelSlice>
    );
}
