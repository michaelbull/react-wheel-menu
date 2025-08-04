import type {
    Meta,
    StoryObj,
} from '@storybook/react-vite';
import type { CSSProperties } from 'react';
import { Label } from '../../label/Label';
import { Layout } from '../../layout/Layout';
import { Segment } from '../../segment/Segment';
import { Spoke } from '../../spoke/Spoke';
import { Wheel } from '../../wheel/Wheel';

const meta: Meta = {
    title: 'Tests/Labels',
    parameters: {
        layout: 'centered',
    },
};

export default meta;

const menuStyle: CSSProperties = {
    width: 600,
    height: 600,
    color: 'white',
    backgroundColor: 'hsl(0, 0%, 80%)',
};

const labelStyle: CSSProperties = {
    margin: '1em',
};

function Body() {
    return (
        <>
            <Layout direction="vertical" justify="start">
                <Label orient="outwards" style={labelStyle} offset={-30}>Bottom</Label>
            </Layout>

            <Layout direction="horizontal" justify="center">
                <Label orient="clockwise" style={labelStyle}>Left</Label>
                <Label orient="counterclockwise" style={labelStyle}>Right</Label>
            </Layout>

            <Layout direction="vertical" justify="end">
                <Label orient="inwards" style={labelStyle}>Top</Label>
            </Layout>
        </>
    );
}

export const SegmentsStory: StoryObj = {
    name: 'Segments',
    render: () => {
        return (
            <Wheel style={menuStyle}>
                <Segment from={315} to={45} style={{ backgroundColor: 'red' }}>
                    <Body/>
                </Segment>

                <Segment from={45} to={135} style={{ backgroundColor: 'green' }}>
                    <Body/>
                </Segment>

                <Segment from={135} to={225} style={{ backgroundColor: 'yellow' }}>
                    <Body/>
                </Segment>

                <Segment from={225} to={315} style={{ backgroundColor: 'blue' }}>
                    <Body/>
                </Segment>
            </Wheel>
        );
    },
};

export const SpokesStory: StoryObj = {
    name: 'Spokes',
    render: () => {
        const width = 120;
        const offset = -(width / 2);
        const height = `calc(50% - ${width / 2}px)`;

        return (
            <Wheel style={menuStyle}>
                <Spoke angle={45} offset={offset} style={{ width, height, backgroundColor: 'red' }}>
                    <Body/>
                </Spoke>

                <Spoke angle={135} offset={offset} style={{ width, height, backgroundColor: 'green' }}>
                    <Body/>
                </Spoke>

                <Spoke angle={225} offset={offset} style={{ width, height, backgroundColor: 'yellow' }}>
                    <Body/>
                </Spoke>

                <Spoke angle={315} offset={offset} style={{ width, height, backgroundColor: 'blue' }}>
                    <Body/>
                </Spoke>
            </Wheel>
        );
    },
};


export const SpokesOnSegments: StoryObj = {
    name: 'Spokes on Segments',
    render: () => {
        const backgroundColor = 'hsla(0, 0%, 0%, 0.1)';

        return (
            <Wheel style={menuStyle}>
                <Segment from={315} to={45} style={{ backgroundColor: 'red' }}/>
                <Segment from={45} to={135} style={{ backgroundColor: 'green' }}/>
                <Segment from={135} to={225} style={{ backgroundColor: 'yellow' }}/>
                <Segment from={225} to={315} style={{ backgroundColor: 'blue' }}/>

                <Spoke align="right" angle={45} offset={-100} style={{ width: 30, height: 100, backgroundColor }}>
                    <Layout direction="horizontal" justify="center">
                        <Label orient="counterclockwise" style={labelStyle}>Right</Label>
                    </Layout>
                </Spoke>

                <Spoke align="center" angle={135} offset={-50} style={{ width: 100, height: 200, backgroundColor }}>
                    <Layout direction="horizontal" justify="center">
                        <Label orient="inwards" style={labelStyle}>Center</Label>
                    </Layout>
                </Spoke>

                <Spoke align="center" angle={225} offset={-125} style={{ width: 200, height: 50, backgroundColor }}>
                    <Layout direction="horizontal" justify="center">
                        <Label orient="inwards" style={labelStyle}>Center</Label>
                    </Layout>
                </Spoke>

                <Spoke angle={315} align="left" offset={-100} style={{ width: 30, height: 100, backgroundColor }}>
                    <Layout direction="horizontal" justify="center">
                        <Label orient="clockwise" style={labelStyle}>Left</Label>
                    </Layout>
                </Spoke>
            </Wheel>
        );
    },
};
