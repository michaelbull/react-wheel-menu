import React, { CSSProperties } from 'react';
import {
    Button,
    ButtonProps,
    Label,
    LabelOrientation,
    RadialWheel,
    Slice
} from '../../src';
import {
    Meta,
    StoryObj
} from '@storybook/react';

interface StoryProps {
    readonly labelOrientation: LabelOrientation;
}

const meta: Meta<StoryProps> = {
    title: 'Tests/Visual',
    parameters: {
        layout: 'centered'
    },
    args: {
        labelOrientation: 'downwards'
    },
    argTypes: {
        labelOrientation: {
            control: 'select',
            options: [
                'downwards',
                'upwards',
                'inwards',
                'outwards',
                'clockwise',
                'counterclockwise'
            ]
        }
    }
};

export default meta;

const style: CSSProperties = {
    width: 300,
    height: 300
};

type Story = StoryObj<StoryProps>;

export const Polar: Story = {
    render: (props) => {
        const { labelOrientation, ...rest } = props;

        return (
            <RadialWheel style={style} {...rest}>
                <ButtonTest orientation={labelOrientation} background="red" height={20} from={195} to={345}>
                    Red
                </ButtonTest>

                <ButtonTest orientation={labelOrientation} background="blue" height={20} from={15} to={165}>
                    Blue
                </ButtonTest>
            </RadialWheel>
        );
    }
};

export const Acute: Story = {
    render: (props) => {
        const { labelOrientation, ...rest } = props;

        return (
            <RadialWheel style={style} {...rest}>
                <ButtonTest orientation={labelOrientation} background="red" height={20} from={330} to={30}>
                    Red
                </ButtonTest>

                <ButtonTest orientation={labelOrientation} background="yellow" height={20} from={30} to={90}>
                    Yellow
                </ButtonTest>

                <ButtonTest orientation={labelOrientation} background="pink" height={20} from={90} to={150}>
                    Pink
                </ButtonTest>

                <ButtonTest orientation={labelOrientation} background="green" height={20} from={150} to={210}>
                    Green
                </ButtonTest>

                <ButtonTest orientation={labelOrientation} background="purple" height={20} from={210} to={270}>
                    Purple
                </ButtonTest>

                <ButtonTest orientation={labelOrientation} background="orange" height={20} from={270} to={330}>
                    Orange
                </ButtonTest>
            </RadialWheel>
        );
    }
};

export const Obtuse: Story = {
    render: (props) => {
        const { labelOrientation, ...rest } = props;

        return (
            <RadialWheel style={style} {...rest}>
                <ButtonTest orientation={labelOrientation} background="red" height={60} from={0} to={120}>
                    Red
                </ButtonTest>

                <ButtonTest orientation={labelOrientation} background="green" height={50} from={120} to={240}>
                    Green
                </ButtonTest>

                <ButtonTest orientation={labelOrientation} background="blue" height={20} from={240} to={360}>
                    Blue
                </ButtonTest>
            </RadialWheel>
        );
    }
};

interface ButtonTestProps extends ButtonProps {
    readonly from: number;
    readonly to: number;
    readonly background: CSSProperties['background'];
    readonly height: number;
    readonly orientation: LabelOrientation;
}

function ButtonTest(props: ButtonTestProps) {
    const {
        from,
        to,
        background,
        height,
        orientation,
        children,
        ...rest
    } = props;

    const style: CSSProperties = {
        background
    };

    const labelStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height,
        color: 'white',
        background: 'hsla(0, 0%, 0%, 0.3)'
    };

    return (
        <Slice from={from} to={to}>
            <Button style={style} {...rest}>
                <Label orientation={orientation} style={labelStyle}>
                    {children}
                </Label>
            </Button>
        </Slice>
    );
}
