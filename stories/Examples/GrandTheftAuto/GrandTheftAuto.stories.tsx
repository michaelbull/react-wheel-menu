import './GrandTheftAuto.css';
import {
    Meta,
    StoryObj
} from '@storybook/react';
import {
    CSSProperties,
    PropsWithChildren
} from 'react';
import {
    CircleMenu,
    Label,
    Layout,
    Segment
} from '../../../src';
import { clsx } from 'clsx';

const meta: Meta = {
    title: 'Examples',
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;

export const GrandTheftAutoStory: StoryObj = {
    name: 'Grand Theft Auto',
    parameters: {
        options: { showPanel: false }
    },
    render: () => {
        return (
            <div className="gta">
                <div className="gta-background" />
                <Menu />
            </div>
        );
    }
};

function Menu() {
    return (
        <CircleMenu className="gta-menu">
            <Weapon from={337.5} to={22.5} label="Pistol" ammo={88} reserve={12}>
                <Icon name="pistol" />
            </Weapon>

            <Weapon from={22.5} to={67.5} label="SMG" ammo={754} reserve={1}>
                <Icon name="smg" />
            </Weapon>

            <Weapon from={67.5} to={112.5} label="Rifle" ammo={34} reserve={60}>
                <Icon name="rifle" />
            </Weapon>

            <Weapon from={112.5} to={157.5} label="Sniper" ammo={1} reserve={11}>
                <Icon name="sniper" style={{ marginLeft: 26, marginTop: -26 }} />
            </Weapon>

            <Weapon from={157.5} to={202.5} label="Fists">
                <Icon name="fist" />
            </Weapon>

            <Weapon from={202.5} to={247.5} label="Shotgun" ammo={92} reserve={8}>
                <Icon name="shotgun" />
            </Weapon>

            <Weapon from={247.5} to={292.5} label="Minigun" ammo={77} reserve={100}>
                <Icon name="minigun" />
            </Weapon>

            <Weapon from={292.5} to={337.5} label="Grenade" ammo={6}>
                <Icon name="grenade" />
            </Weapon>

            <div className="gta-menu__center" />
        </CircleMenu>
    );
}

interface WeaponProps {
    readonly label: string;
    readonly from: number;
    readonly to: number;
    readonly ammo?: number;
    readonly reserve?: number;
}

function Weapon(props: PropsWithChildren<WeaponProps>) {
    const {
        label: labelProp,
        ammo,
        reserve,
        children,
        ...rest
    } = props;

    const label = labelFrom(labelProp, ammo, reserve);

    return (
        <Segment as="button" className="gta-weapon" gapBefore={4} gapAfter={4} aria-label={label} {...rest}>
            <Layout className="gta-weapon__layout" justify="end">
                <Label className="gta-weapon__label" offset={50}>
                    {children}
                    <Ammo current={ammo} reserve={reserve} />
                </Label>
            </Layout>
        </Segment>
    );
}

function labelFrom(label: string, ammo?: number, reserve?: number): string {
    if (ammo !== undefined && reserve !== undefined) {
        return `${label} (${ammo} / ${reserve})`;
    } else if (ammo !== undefined) {
        return `${label} (${ammo})`;
    } else {
        return label;
    }
}

interface IconProps {
    readonly name: string;
    readonly style?: CSSProperties;
}

function Icon(props: IconProps) {
    const { name, style } = props;
    const className = clsx('gta-weapon__icon', `gta-weapon__icon--${name}`);

    return <div
        className={className}
        style={style}
    />;
}

interface AmmoProps {
    readonly current?: number;
    readonly reserve?: number;
}

function Ammo(props: AmmoProps) {
    const { current, reserve } = props;

    return (
        <span className="gta-weapon-ammo">
            {current &&
                <span className="gta-weapon-menu-ammo__current">
                    {current}
                </span>
            }

            {reserve &&
                <span className="gta-weapon-ammo__reserve">
                    &nbsp;/{reserve}
                </span>
            }
        </span>
    );
}
