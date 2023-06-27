import React, { ComponentProps } from 'react';
import {
    Button,
    Label,
    RadialWheel,
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
        <div className="gta-weapon-menu">
            <RadialWheel className="gta-weapon-menu__wheel">
                <Slice className="gta-weapon-menu__slice" from={338} to={22}>
                    <Button className="gta-weapon-menu__button">
                        <Label className="gta-weapon-menu__label" orientation="parent">
                            <Icon
                                src="https://vignette.wikia.nocookie.net/gtawiki/images/8/8f/Pistol-GTAVPC-HUD.png"
                                alt="Pistol"
                            />

                            <Ammo current={88} reserve={12} />
                        </Label>
                    </Button>
                </Slice>

                <Slice className="gta-weapon-menu__slice" from={23} to={67}>
                    <Button className="gta-weapon-menu__button">
                        <Label className="gta-weapon-menu__label">
                            <Icon
                                src="https://vignette.wikia.nocookie.net/gtawiki/images/5/5e/SMG-GTAVPC-HUD.png"
                                alt="SMG"
                            />

                            <Ammo current={754} reserve={1} />
                        </Label>
                    </Button>
                </Slice>

                <Slice className="gta-weapon-menu__slice" from={68} to={112}>
                    <Button className="gta-weapon-menu__button">
                        <Label className="gta-weapon-menu__label">
                            <Icon
                                src="https://vignette.wikia.nocookie.net/gtawiki/images/7/7a/CarbineRifle-GTAVPC-HUD.png"
                                alt="Rifle"
                            />

                            <Ammo current={34} reserve={60} />
                        </Label>
                    </Button>
                </Slice>

                <Slice className="gta-weapon-menu__slice" from={113} to={157}>
                    <Button className="gta-weapon-menu__button">
                        <Label className="gta-weapon-menu__label">
                            <Icon
                                src="https://static.wikia.nocookie.net/gtawiki/images/5/59/SniperRifle-GTAVPC-HUD.png"
                                alt="Sniper"
                                style={{ marginLeft: '53px', marginTop: '-10px' }}
                            />

                            <Ammo current={90} reserve={10} />
                        </Label>
                    </Button>
                </Slice>

                <Slice className="gta-weapon-menu__slice" from={158} to={202}>
                    <Button className="gta-weapon-menu__button">
                        <Label className="gta-weapon-menu__label">
                            <Icon
                                src="https://vignette.wikia.nocookie.net/gtawiki/images/e/e0/Fist-GTAVPC-HUD.png"
                                alt="Fists"
                            />
                        </Label>
                    </Button>
                </Slice>

                <Slice className="gta-weapon-menu__slice" from={203} to={247}>
                    <Button className="gta-weapon-menu__button">
                        <Label className="gta-weapon-menu__label">
                            <Icon
                                src="https://vignette.wikia.nocookie.net/gtawiki/images/b/b4/SawedoffShotgun-GTAVPC-HUD.png"
                                alt="Shotgun"
                            />

                            <Ammo current={92} reserve={8} />
                        </Label>
                    </Button>
                </Slice>

                <Slice className="gta-weapon-menu__slice" from={248} to={292}>
                    <Button className="gta-weapon-menu__button">
                        <Label className="gta-weapon-menu__label">
                            <Icon
                                src="https://vignette.wikia.nocookie.net/gtawiki/images/2/27/Minigun-GTAVPC-HUD.png"
                                alt="Minigun"
                            />

                            <Ammo current={77} reserve={100} />
                        </Label>
                    </Button>
                </Slice>

                <Slice className="gta-weapon-menu__slice" from={293} to={337}>
                    <Button className="gta-weapon-menu__button">
                        <Label className="gta-weapon-menu__label">
                            <Icon
                                src="https://static.wikia.nocookie.net/gtawiki/images/a/a6/Grenade-GTAVPC-HUD.png"
                                alt="Grenade"
                            />

                            <Ammo current={6} />
                        </Label>
                    </Button>
                </Slice>

                <div className="gta-weapon-menu__center" />
            </RadialWheel>
        </div>
    );
}

function Icon(props: ComponentProps<'img'>) {
    return (
        <span>
            <img
                className="gta-weapon-menu__icon"
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
        <span className="gta-weapon-menu-ammo">
            <span className="gta-weapon-menu-ammo__current">
                {current}
            </span>

            {reserve &&
                <span className="gta-weapon-menu-ammo__reserve">
                    &nbsp;/{reserve}
                </span>
            }
        </span>
    );
}
