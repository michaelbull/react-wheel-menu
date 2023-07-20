import type {
    CSSProperties,
    PropsWithChildren
} from 'react';
import type {
    Direction,
    Justification,
    Offset,
    Orientation,
    SliceProps
} from '../../src';
import {
    CircleMenu,
    Label,
    Layout,
    Slice
} from '../../src';
import type {
    Meta,
    StoryObj
} from '@storybook/react';

interface StoryProps {
    readonly layoutJustify: Justification;
    readonly layoutDirection: Direction;

    readonly labelOrient: Orientation;
    readonly labelJustify: Justification;
    readonly labelOffset: Offset;
}

const meta: Meta<StoryProps> = {
    title: 'Tests/Angles',
    parameters: {
        layout: 'centered'
    },
    args: {
        layoutJustify: 'center',
        layoutDirection: 'vertical',
        labelOrient: 'downwards',
        labelJustify: 'center',
        labelOffset: '0px'
    },
    argTypes: {
        layoutJustify: {
            name: 'Justify',
            control: 'select',
            options: [
                'start',
                'center',
                'end'
            ],
            table: {
                category: 'Layout'
            }
        },
        layoutDirection: {
            name: 'Direction',
            control: 'select',
            options: [
                'vertical',
                'horizontal'
            ],
            table: {
                category: 'Layout'
            }
        },
        labelOrient: {
            name: 'Orient',
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
        }
    }
};

export default meta;

const style: CSSProperties = {
    width: 600,
    height: 600
};

type Story = StoryObj<StoryProps>;

export const PolarStory: Story = {
    name: 'Polar',
    render: (props) => {
        return (
            <CircleMenu style={style}>
                <Button {...props} background="red" height={20} from={285} to={75}>
                    Red
                </Button>

                <Button {...props} background="blue" height={20} from={105} to={255}>
                    Blue
                </Button>
            </CircleMenu>
        );
    }
};

export const AcuteStory: Story = {
    name: 'Acute',
    render: (props) => {
        return (
            <CircleMenu style={style}>
                <Button {...props} background="red" height={20} from={330} to={30}>
                    Red
                </Button>

                <Button {...props} background="yellow" height={20} from={30} to={90}>
                    Yellow
                </Button>

                <Button {...props} background="pink" height={20} from={90} to={150}>
                    Pink
                </Button>

                <Button {...props} background="green" height={20} from={150} to={210}>
                    Green
                </Button>

                <Button {...props} background="purple" height={20} from={210} to={270}>
                    Purple
                </Button>

                <Button {...props} background="orange" height={20} from={270} to={330}>
                    Orange
                </Button>
            </CircleMenu>
        );
    }
};

export const ObtuseStory: Story = {
    name: 'Obtuse',
    render: (props) => {
        return (
            <CircleMenu style={style}>
                <Button {...props} background="red" height={30} from={0} to={120}>
                    Red
                </Button>

                <Button {...props} background="green" height={25} from={120} to={240}>
                    Green
                </Button>

                <Button {...props} background="blue" height={10} from={240} to={360}>
                    Blue
                </Button>
            </CircleMenu>
        );
    }
};

interface ButtonProps extends StoryProps, SliceProps<'button'> {
    readonly background: CSSProperties['background'];
    readonly height: number;
}

function Button(props: PropsWithChildren<ButtonProps>) {
    const {
        background,
        height,
        layoutJustify,
        layoutDirection,
        labelOrient,
        labelJustify,
        labelOffset,
        children,
        ...rest
    } = props;

    const layoutStyle: CSSProperties = {
        background
    };

    const labelStyle: CSSProperties = {
        height,
        width: '80px',
        color: 'white',
        background: 'hsla(0, 0%, 0%, 0.3)'
    };

    return (
        <Slice as="button" {...rest}>
            <Layout style={layoutStyle} justify={layoutJustify} direction={layoutDirection}>
                <Label orient={labelOrient} justify={labelJustify} offset={labelOffset} style={labelStyle}>
                    {children}
                </Label>

                <Label justify={labelJustify} orient={labelOrient} style={labelStyle}>
                    {children}
                </Label>
            </Layout>
        </Slice>
    );
}
