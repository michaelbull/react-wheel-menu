import React, { CSSProperties } from 'react';
import {
    Button,
    ButtonProps,
    CircleMenu,
    Justify,
    Label,
    Layout,
    Offset,
    Orientation,
    Slice
} from '../../src';
import {
    Meta,
    StoryObj
} from '@storybook/react';

interface StoryProps {
    readonly itemJustify: Justify;
    readonly itemLayout: Layout;

    readonly labelJustify: Justify;
    readonly labelOffset: Offset;
    readonly labelOrientation: Orientation;
}

const meta: Meta<StoryProps> = {
    title: 'Tests/Visual',
    parameters: {
        layout: 'centered'
    },
    args: {
        itemJustify: 'center',
        itemLayout: 'vertical',
        labelJustify: 'center',
        labelOffset: '0px',
        labelOrientation: 'downwards'
    },
    argTypes: {
        itemJustify: {
            name: 'Justify',
            control: 'select',
            options: [
                'start',
                'center',
                'end'
            ],
            table: {
                category: 'Item'
            }
        },
        itemLayout: {
            name: 'Layout',
            control: 'select',
            options: [
                'vertical',
                'horizontal'
            ],
            table: {
                category: 'Item'
            }
        },
        labelJustify: {
            name: 'Justify',
            control: 'select',
            options: [
                'start',
                'center',
                'end'
            ],
            table: {
                category: 'Label'
            }
        },
        labelOffset: {
            name: 'Offset',
            table: {
                category: 'Label'
            }
        },
        labelOrientation: {
            name: 'Orientation',
            control: 'select',
            options: [
                'downwards',
                'upwards',
                'inwards',
                'outwards',
                'clockwise',
                'counterclockwise'
            ],
            table: {
                category: 'Label'
            }
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
        return (
            <CircleMenu style={style}>
                <ButtonTest {...props} background="red" height={20} from={285} to={75}>
                    Red
                </ButtonTest>

                <ButtonTest {...props} background="blue" height={20} from={105} to={255}>
                    Blue
                </ButtonTest>
            </CircleMenu>
        );
    }
};

export const Acute: Story = {
    render: (props) => {
        return (
            <CircleMenu style={style}>
                <ButtonTest {...props} background="red" height={20} from={330} to={30}>
                    Red
                </ButtonTest>

                <ButtonTest {...props} background="yellow" height={20} from={30} to={90}>
                    Yellow
                </ButtonTest>

                <ButtonTest {...props} background="pink" height={20} from={90} to={150}>
                    Pink
                </ButtonTest>

                <ButtonTest {...props} background="green" height={20} from={150} to={210}>
                    Green
                </ButtonTest>

                <ButtonTest {...props} background="purple" height={20} from={210} to={270}>
                    Purple
                </ButtonTest>

                <ButtonTest {...props} background="orange" height={20} from={270} to={330}>
                    Orange
                </ButtonTest>
            </CircleMenu>
        );
    }
};

export const Obtuse: Story = {
    render: (props) => {
        return (
            <CircleMenu style={style}>
                <ButtonTest {...props} background="red" height={30} from={0} to={120}>
                    Red
                </ButtonTest>

                <ButtonTest {...props} background="green" height={25} from={120} to={240}>
                    Green
                </ButtonTest>

                <ButtonTest {...props} background="blue" height={10} from={240} to={360}>
                    Blue
                </ButtonTest>
            </CircleMenu>
        );
    }
};

interface ButtonTestProps extends ButtonProps {
    readonly from: number;
    readonly to: number;
    readonly background: CSSProperties['background'];
    readonly height: number;

    readonly itemJustify: Justify;
    readonly itemLayout: Layout;

    readonly labelJustify: Justify;
    readonly labelOffset: string | number;
    readonly labelOrientation: Orientation;
}

function ButtonTest(props: ButtonTestProps) {
    const {
        from,
        to,
        background,
        height,
        itemJustify,
        itemLayout,
        labelJustify,
        labelOffset,
        labelOrientation,
        children,
        ...rest
    } = props;

    const style: CSSProperties = {
        background
    };

    const labelStyle: CSSProperties = {
        height,
        width: '80px',
        color: 'white',
        background: 'hsla(0, 0%, 0%, 0.3)'
    };

    return (
        <Slice from={from} to={to}>
            <Button style={style} justify={itemJustify} layout={itemLayout} {...rest}>
                <Label justify={labelJustify} orientation={labelOrientation} offset={labelOffset} style={labelStyle}>
                    {children}
                </Label>

                <Label justify={labelJustify} orientation={labelOrientation} style={labelStyle}>
                    {children}
                </Label>
            </Button>
        </Slice>
    );
}
