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
            <Weapon from={337.5} to={22.5}>
                <Icon
                    src="https://vignette.wikia.nocookie.net/gtawiki/images/8/8f/Pistol-GTAVPC-HUD.png"
                    alt="Pistol"
                />

                <Ammo current={88} reserve={12} />
            </Weapon>

            <Weapon from={22.5} to={67.5}>
                <Icon
                    src="https://vignette.wikia.nocookie.net/gtawiki/images/5/5e/SMG-GTAVPC-HUD.png"
                    alt="SMG"
                />

                <Ammo current={754} reserve={1} />
            </Weapon>

            <Weapon from={67.5} to={112.5}>
                <Icon
                    src="https://vignette.wikia.nocookie.net/gtawiki/images/7/7a/CarbineRifle-GTAVPC-HUD.png"
                    alt="Rifle"
                />

                <Ammo current={34} reserve={60} />
            </Weapon>

            <Weapon from={112.5} to={157.5}>
                <Icon
                    src="https://static.wikia.nocookie.net/gtawiki/images/5/59/SniperRifle-GTAVPC-HUD.png"
                    alt="Sniper"
                    style={{ marginLeft: 43, marginTop: -6 }}
                />

                <Ammo current={1} reserve={11} />
            </Weapon>

            <Weapon from={157.5} to={202.5}>
                <Icon
                    src="https://vignette.wikia.nocookie.net/gtawiki/images/e/e0/Fist-GTAVPC-HUD.png"
                    alt="Fists"
                />
            </Weapon>

            <Weapon from={202.5} to={247.5}>
                <Icon
                    src="https://vignette.wikia.nocookie.net/gtawiki/images/b/b4/SawedoffShotgun-GTAVPC-HUD.png"
                    alt="Shotgun"
                />

                <Ammo current={92} reserve={8} />
            </Weapon>

            <Weapon from={247.5} to={292.5}>
                <Icon
                    src="https://vignette.wikia.nocookie.net/gtawiki/images/2/27/Minigun-GTAVPC-HUD.png"
                    alt="Minigun"
                />

                <Ammo current={77} reserve={100} />
            </Weapon>

            <Weapon from={292.5} to={337.5}>
                <Icon
                    src="https://static.wikia.nocookie.net/gtawiki/images/a/a6/Grenade-GTAVPC-HUD.png"
                    alt="Grenade"
                />

                <Ammo current={6} />
            </Weapon>

            <div className="gta-weapon-menu__center" />
        </CircleMenu>
    );
}

interface WeaponProps {
    readonly from: number;
    readonly to: number;
}

function Weapon(props: PropsWithChildren<WeaponProps>) {
    const {
        from,
        to,
        children
    } = props;

    return (
        <Slice as="button" className="gta-weapon" from={from} to={to} gapBefore={4} gapAfter={4}>
            <Layout className="gta-weapon__button" justify="end">
                <Label className="gta-weapon__label" offset={70}>
                    {children}
                </Label>
            </Layout>
        </Slice>
    );
}

function Icon(props: ComponentProps<'img'>) {
    return (
        <span>
            <img
                className="gta-weapon__icon"
                referrerPolicy="no-referrer"
                {...props}
            />
        </span>
    );
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
