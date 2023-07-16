import React, { PropsWithChildren } from 'react';
import {
    CircleMenu,
    Label,
    Layout,
    Offset,
    Slice,
    Spoke
} from '../../src';
import {
    Meta,
    StoryObj
} from '@storybook/react';
import './OwCommunicationMenu.css';

const meta: Meta = {
    title: 'Examples',
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;

export const OverwatchStory: StoryObj = {
    name: 'Overwatch',
    render: () => <Overwatch />
};

function Overwatch() {
    return (
        <div className="ow-background">
            <CircleMenu className="ow-menu" as="ul">
                <Option from={337.5} to={22.5} label="Emote" hotkey="5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23M17,10H13V9H17V10Z" />
                    </svg>
                </Option>

                <Option from={22.5} to={67.5} label="Hello" hotkey="3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M23 17C23 20.31 20.31 23 17 23V21.5C19.5 21.5 21.5 19.5 21.5 17H23M1 7C1 3.69 3.69 1 7 1V2.5C4.5 2.5 2.5 4.5 2.5 7H1M8 4.32L3.41 8.92C.19 12.14 .19 17.37 3.41 20.59S11.86 23.81 15.08 20.59L22.15 13.5C22.64 13.03 22.64 12.24 22.15 11.75C21.66 11.26 20.87 11.26 20.38 11.75L15.96 16.17L15.25 15.46L21.79 8.92C22.28 8.43 22.28 7.64 21.79 7.15S20.5 6.66 20 7.15L14.19 13L13.5 12.27L20.37 5.38C20.86 4.89 20.86 4.1 20.37 3.61S19.09 3.12 18.6 3.61L11.71 10.5L11 9.8L16.5 4.32C17 3.83 17 3.04 16.5 2.55S15.22 2.06 14.73 2.55L7.11 10.17C8.33 11.74 8.22 14 6.78 15.45L6.07 14.74C7.24 13.57 7.24 11.67 6.07 10.5L5.72 10.15L9.79 6.08C10.28 5.59 10.28 4.8 9.79 4.31C9.29 3.83 8.5 3.83 8 4.32Z" />
                    </svg>
                </Option>

                <Option from={67.5} to={112.5} label="Need healing" offset={-280} hotkey="X">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                </Option>

                <Option from={112.5} to={157.5} label="Group up" hotkey="G">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M19.5,3.09L20.91,4.5L16.41,9H20V11H13V4H15V7.59L19.5,3.09M20.91,19.5L19.5,20.91L15,16.41V20H13V13H20V15H16.41L20.91,19.5M4.5,3.09L9,7.59V4H11V11H4V9H7.59L3.09,4.5L4.5,3.09M3.09,19.5L7.59,15H4V13H11V20H9V16.41L4.5,20.91L3.09,19.5Z" />
                    </svg>
                </Option>

                <Option from={157.5} to={202.5} label="Ultimate status" hotkey="Z">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                    </svg>
                </Option>

                <Option from={202.5} to={247.5} label="Voice line" hotkey="G">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                    </svg>
                </Option>

                <Option from={247.5} to={292.5} label="Acknowledge" offset={-280} hotkey="F">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                </Option>

                <Option from={292.5} to={337.5} label="Thank" hotkey="4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
                    </svg>
                </Option>

                <Line at={22.5} />
                <Line at={67.5} />
                <Line at={112.5} />
                <Line at={157.5} />
                <Line at={202.5} />
                <Line at={247.5} />
                <Line at={292.5} />
                <Line at={337.5} />

                <div className="ow-menu__center" />
            </CircleMenu>
        </div>
    );
}

interface OptionProps {
    readonly from: number;
    readonly to: number;
    readonly label: string;
    readonly offset?: Offset;
    readonly hotkey?: string;
}

function Option(props: PropsWithChildren<OptionProps>) {
    const {
        label,
        offset = -230,
        hotkey,
        children,
        ...rest
    } = props;

    return (
        <Slice as="li" className="ow-communication-option" aria-label={label} gapBefore={1} gapAfter={1} {...rest}>
            <Layout as="button" className="ow-option__button" justify="start">
                {hotkey &&
                    <Label offset={-110}>
                        <span className="ow-hotkey">
                            <span className="ow-hotkey__label">{hotkey}</span>
                        </span>
                    </Label>
                }

                <Label className="ow-option__label" offset={offset}>
                    {label}
                </Label>

                {children &&
                    <Label className="ow-option__icon" offset={-140}>
                        {children}
                    </Label>
                }
            </Layout>
        </Slice>
    );
}

interface LineProps {
    readonly at: number;
}

function Line(props: LineProps) {
    const {
        at
    } = props;

    return <Spoke
        className="ow-menu__divider"
        at={at}
        offset={96}
    />;
}

