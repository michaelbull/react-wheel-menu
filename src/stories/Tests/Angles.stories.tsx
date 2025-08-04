import {
    type  Meta,
    type StoryObj,
} from '@storybook/react-vite';
import type {
    CSSProperties,
    PropsWithChildren,
} from 'react';
import {
    DEFAULT_LABEL_JUSTIFICATION,
    DEFAULT_LABEL_OFFSET,
    DEFAULT_LABEL_ORIENTATION,
    Label,
    LABEL_JUSTIFICATIONS,
    LABEL_ORIENTATIONS,
    type LabelJustification,
    type LabelOffset,
    type LabelOrientation,
} from '../../label';
import {
    DEFAULT_LAYOUT_DIRECTION,
    DEFAULT_LAYOUT_JUSTIFICATION,
    Layout,
    LAYOUT_DIRECTIONS,
    LAYOUT_JUSTIFICATIONS,
    type LayoutDirection,
    type LayoutJustification,
} from '../../layout';
import {
    Segment,
    type SegmentProps,
} from '../../segment';
import { Wheel } from '../../wheel';

interface StoryProps {
    readonly layoutJustify: LayoutJustification;
    readonly layoutDirection: LayoutDirection;

    readonly labelOrient: LabelOrientation;
    readonly labelJustify: LabelJustification;
    readonly labelOffset: LabelOffset;
}

const meta: Meta<StoryProps> = {
    title: 'Tests/Angles',
    parameters: {
        layout: 'centered',
    },
    args: {
        layoutJustify: DEFAULT_LAYOUT_JUSTIFICATION,
        layoutDirection: DEFAULT_LAYOUT_DIRECTION,
        labelOrient: DEFAULT_LABEL_ORIENTATION,
        labelJustify: DEFAULT_LABEL_JUSTIFICATION,
        labelOffset: DEFAULT_LABEL_OFFSET,
    },
    argTypes: {
        layoutJustify: {
            name: 'Justify',
            control: 'select',
            options: LAYOUT_JUSTIFICATIONS,
            table: {
                category: 'Layout',
            },
        },
        layoutDirection: {
            name: 'Direction',
            control: 'select',
            options: LAYOUT_DIRECTIONS,
            table: {
                category: 'Layout',
            },
        },
        labelOrient: {
            name: 'Orient',
            control: 'select',
            options: LABEL_ORIENTATIONS,
            table: {
                category: 'Label',
            },
        },
        labelJustify: {
            name: 'Justify',
            control: 'select',
            options: LABEL_JUSTIFICATIONS,
            table: {
                category: 'Label',
            },
        },
        labelOffset: {
            name: 'Offset',
            table: {
                category: 'Label',
            },
        },
    },
};

export default meta;

const style: CSSProperties = {
    width: 600,
    height: 600,
};

type Story = StoryObj<typeof meta>;

export const PolarStory: Story = {
    args: {
        labelOffset: DEFAULT_LABEL_OFFSET,
    },
    name: 'Polar',
    render: (props) => {
        return (
            <Wheel style={style}>
                <Button {...props} background="red" height={20} from={285} to={75}>
                    Red
                </Button>

                <Button {...props} background="blue" height={20} from={105} to={255}>
                    Blue
                </Button>
            </Wheel>
        );
    },
};

export const AcuteStory: Story = {
    name: 'Acute',
    render: (props) => {
        return (
            <Wheel style={style}>
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
            </Wheel>
        );
    },
};

export const ObtuseStory: Story = {
    name: 'Obtuse',
    render: (props) => {
        return (
            <Wheel style={style}>
                <Button {...props} background="red" height={30} from={0} to={120}>
                    Red
                </Button>

                <Button {...props} background="green" height={25} from={120} to={240}>
                    Green
                </Button>

                <Button {...props} background="blue" height={10} from={240} to={360}>
                    Blue
                </Button>
            </Wheel>
        );
    },
};

interface ButtonProps extends StoryProps, SegmentProps<'button'> {
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
        background,
    };

    const labelStyle: CSSProperties = {
        height,
        width: '80px',
        color: 'white',
        background: 'hsla(0, 0%, 0%, 0.3)',
    };

    return (
        <Segment as="button" {...rest}>
            <Layout style={layoutStyle} justify={layoutJustify} direction={layoutDirection}>
                <Label orient={labelOrient} justify={labelJustify} offset={labelOffset} style={labelStyle}>
                    {children}
                </Label>

                <Label justify={labelJustify} orient={labelOrient} style={labelStyle}>
                    {children}
                </Label>
            </Layout>
        </Segment>
    );
}
