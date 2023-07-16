import React, {
    ComponentProps,
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
import './GtaWeaponMenu.css';

const meta: Meta = {
    title: 'Examples',
    parameters: {
        layout: 'centered'
    }
};

export default meta;

export const GtaWeaponMenuStory: StoryObj = {
    name: 'GTA Weapon Menu',
    render: () => <GtaWeaponMenu />
};

function GtaWeaponMenu() {
    return (
        <CircleMenu className="gta-weapon-menu">
            <Weapon from={337.5} to={22.5} label="Pistol" ammo={88} reserve={12}>
                <Icon
                    src="https://vignette.wikia.nocookie.net/gtawiki/images/8/8f/Pistol-GTAVPC-HUD.png"
                    alt="Pistol Icon"
                />
            </Weapon>

            <Weapon from={22.5} to={67.5} label="SMG" ammo={754} reserve={1}>
                <Icon
                    src="https://vignette.wikia.nocookie.net/gtawiki/images/5/5e/SMG-GTAVPC-HUD.png"
                    alt="SMG Icon"
                />
            </Weapon>

            <Weapon from={67.5} to={112.5} label="Rifle" ammo={34} reserve={60}>
                <Icon
                    src="https://vignette.wikia.nocookie.net/gtawiki/images/7/7a/CarbineRifle-GTAVPC-HUD.png"
                    alt="Rifle Icon"
                />
            </Weapon>

            <Weapon from={112.5} to={157.5} label="Sniper" ammo={1} reserve={11}>
                <Icon
                    src="https://static.wikia.nocookie.net/gtawiki/images/5/59/SniperRifle-GTAVPC-HUD.png"
                    alt="Sniper Icon"
                    style={{ marginLeft: 26, marginTop: -26 }}
                />
            </Weapon>

            <Weapon from={157.5} to={202.5} label="Fists">
                <Icon
                    src="https://vignette.wikia.nocookie.net/gtawiki/images/e/e0/Fist-GTAVPC-HUD.png"
                    alt="Fists Icon"
                />
            </Weapon>

            <Weapon from={202.5} to={247.5} label="Shotgun" ammo={92} reserve={8}>
                <Icon
                    src="https://vignette.wikia.nocookie.net/gtawiki/images/b/b4/SawedoffShotgun-GTAVPC-HUD.png"
                    alt="Shotgun Icon"
                />
            </Weapon>

            <Weapon from={247.5} to={292.5} label="Minigun" ammo={77} reserve={100}>
                <Icon
                    src="https://vignette.wikia.nocookie.net/gtawiki/images/2/27/Minigun-GTAVPC-HUD.png"
                    alt="Minigun Icon"
                />
            </Weapon>

            <Weapon from={292.5} to={337.5} label="Grenade" ammo={6}>
                <Icon
                    src="https://static.wikia.nocookie.net/gtawiki/images/a/a6/Grenade-GTAVPC-HUD.png"
                    alt="Grenade Icon"
                />
            </Weapon>

            <div className="gta-weapon-menu__center" />
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
        <Slice as="button" className="gta-weapon" gapBefore={4} gapAfter={4} aria-label={label} {...rest}>
            <Layout className="gta-weapon__button" justify="end">
                <Label className="gta-weapon__label" offset={50}>
                    {children}
                    {ammo && <Ammo current={ammo} reserve={reserve} />}
                </Label>
            </Layout>
        </Slice>
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

function Icon(props: ComponentProps<'img'>) {
    return <img
        className="gta-weapon__icon"
        referrerPolicy="no-referrer"
        {...props}
    />;
}

interface AmmoProps {
    readonly current: number;
    readonly reserve?: number;
}

function Ammo(props: AmmoProps) {
    const { current, reserve } = props;

    return (
        <span className="gta-weapon-ammo">
            <span className="gta-weapon-menu-ammo__current">
                {current}
            </span>

            {reserve &&
                <span className="gta-weapon-ammo__reserve">
                    &nbsp;/{reserve}
                </span>
            }
        </span>
    );
}
