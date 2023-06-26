import React from 'react';
import {
    RadialWheel,
    RadialWheelButton
} from '../../src';
import {
    Meta,
    StoryObj
} from '@storybook/react';
import './csgo.css';
import { RadialWheelLabel } from '../../src/components/RadialWheelLabel';
import { RadialWheelSlice } from '../../src/components/RadialWheelSlice';

const meta: Meta = {
    title: 'Examples',
    parameters: {
        layout: 'centered'
    }
};

export default meta;

export const BasicExample: StoryObj = {
    name: 'Basic Example',
    render: () => {
        return (
            <RadialWheel style={{ width: '300px', height: '300px' }}>
                <RadialWheelSlice style={{ background: 'red' }}>
                    <RadialWheelButton>
                        <RadialWheelLabel style={{ color: 'white' }}>
                            One
                        </RadialWheelLabel>
                    </RadialWheelButton>
                </RadialWheelSlice>

                <RadialWheelSlice style={{ background: 'green' }}>
                    <RadialWheelButton>
                        <RadialWheelLabel style={{ color: 'white' }}>
                            Two
                        </RadialWheelLabel>
                    </RadialWheelButton>
                </RadialWheelSlice>

                <RadialWheelSlice style={{ background: 'blue' }}>
                    <RadialWheelButton>
                        <RadialWheelLabel style={{ color: 'white' }}>
                            Three
                        </RadialWheelLabel>
                    </RadialWheelButton>
                </RadialWheelSlice>
            </RadialWheel>
        );
    }
};
