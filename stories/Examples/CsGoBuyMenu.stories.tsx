import React, {
    ReactNode,
    useState
} from 'react';
import {
    Button as RadialWheelButton,
    ButtonProps as RadialWheelButtonProps,
    Label,
    RadialWheel,
    Slice
} from '../../src';
import {
    Meta,
    StoryObj
} from '@storybook/react';
import './CsGoBuyMenu.css';

const meta: Meta = {
    title: 'Examples',
    parameters: {
        layout: 'centered'
    }
};

export default meta;

export const CsGoBuyMenuStory: StoryObj = {
    name: 'CS:GO Buy Menu',
    render: () => <CsGoBuyMenu />
};

function CsGoBuyMenu() {
    const [submenu, setSubMenu] = useState<ReactNode>(null);

    function onReset() {
        setSubMenu(null);
    }

    return (
        <RadialWheel className="csgo-buy-menu">
            <TeamImage />
            {submenu ?? <RootMenu onReset={onReset} onChoose={setSubMenu} />}
        </RadialWheel>
    );
}

interface RootMenuProps {
    readonly onReset: () => void;
    readonly onChoose: (submenu: ReactNode) => void;
}

function RootMenu(props: RootMenuProps) {
    const { onReset, onChoose } = props;

    return (
        <>
            <Button from={300} to={0} hotkey={1} onClick={() => onChoose(<PistolsMenu onReset={onReset} />)}>
                PISTOLS
            </Button>

            <Button from={0} to={60} hotkey={2} onClick={() => onChoose(<HeavyMenu onReset={onReset} />)}>
                HEAVY
            </Button>

            <Button from={60} to={120} hotkey={3} onClick={() => onChoose(<SmgsMenu onReset={onReset} />)}>
                SMGs
            </Button>

            <Button from={120} to={180} hotkey={4} onClick={() => onChoose(<RiflesMenu onReset={onReset} />)}>
                RIFLES
            </Button>

            <Button from={180} to={240} hotkey={5} onClick={() => onChoose(<GearMenu onReset={onReset} />)}>
                GEAR
            </Button>

            <Button from={240} to={300} hotkey={6} onClick={() => onChoose(<GrenadesMenu onReset={onReset} />)}>
                GRENADES
            </Button>
        </>
    );
}

interface SubMenuProps {
    readonly onReset: () => void;
}

function PistolsMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <>
            <Button from={300} to={360} hotkey={1} onClick={onReset} price={200}>
                Glock-18
            </Button>

            <Button from={0} to={60} hotkey={2} onClick={onReset} price={500}>
                Dual Berettas
            </Button>

            <Button from={60} to={120} hotkey={3} onClick={onReset} price={300}>
                P250
            </Button>

            <Button from={120} to={180} hotkey={4} onClick={onReset} price={500}>
                CZ75-Auto
            </Button>

            <Button from={180} to={240} hotkey={5} onClick={onReset} price={700}>
                Desert Eagle
            </Button>

            <Button from={240} to={300} hotkey={6}>
                &nbsp;
            </Button>
        </>
    );
}

function HeavyMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <>
            <Button from={300} to={360} hotkey={1} onClick={onReset} price={1200}>
                Nova
            </Button>

            <Button from={0} to={60} hotkey={2} onClick={onReset} price={2000}>
                XM1014
            </Button>

            <Button from={60} to={120} hotkey={3} onClick={onReset} price={1200}>
                Sawed-Off
            </Button>

            <Button from={120} to={180} hotkey={4} onClick={onReset} price={5200}>
                M249
            </Button>

            <Button from={180} to={240} hotkey={5} onClick={onReset} price={5700}>
                Negev
            </Button>

            <Button from={240} to={300} hotkey={6}>
                &nbsp;
            </Button>
        </>
    );
}

function SmgsMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <>
            <Button from={300} to={360} hotkey={1} onClick={onReset} price={1050}>
                MAC-10
            </Button>

            <Button from={0} to={60} hotkey={2} onClick={onReset} price={1700}>
                MP7
            </Button>

            <Button from={60} to={120} hotkey={3} onClick={onReset} price={1200}>
                UMP-45
            </Button>

            <Button from={120} to={180} hotkey={4} onClick={onReset} price={2350}>
                P90
            </Button>

            <Button from={180} to={240} hotkey={5} onClick={onReset} price={1400}>
                PP-Bizon
            </Button>

            <Button from={240} to={300} hotkey={6}>
                &nbsp;
            </Button>
        </>
    );
}

function RiflesMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <>
            <Button from={300} to={360} hotkey={1} onClick={onReset} price={2000}>
                Galil AR
            </Button>

            <Button from={0} to={60} hotkey={2} onClick={onReset} price={2700}>
                AK-47
            </Button>

            <Button from={60} to={120} hotkey={3} onClick={onReset} price={1700}>
                SSG 08
            </Button>

            <Button from={120} to={180} hotkey={4} onClick={onReset} price={3000}>
                SG 553
            </Button>

            <Button from={180} to={240} hotkey={5} onClick={onReset} price={4750}>
                AWP
            </Button>

            <Button from={240} to={300} hotkey={6} onClick={onReset} price={5000}>
                G3SG1
            </Button>
        </>
    );
}

function GearMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <>
            <Button from={315} to={45} hotkey={1} onClick={onReset} price={650}>
                Kevlar Vest
            </Button>

            <Button from={45} to={135} hotkey={2} onClick={onReset} price={1000}>
                Kevlar + Helmet
            </Button>

            <Button from={135} to={225} hotkey={3} onClick={onReset} price={400}>
                Zeus x27
            </Button>

            <Button from={225} to={315} hotkey={4} onClick={onReset} price={400}>
                Defuse Kit
            </Button>
        </>
    );
}

function GrenadesMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <>
            <Button from={300} to={360} hotkey={1} onClick={onReset} price={400}>
                Molotov
            </Button>

            <Button from={0} to={60} hotkey={2} onClick={onReset} price={50}>
                Decoy Grenade
            </Button>

            <Button from={60} to={120} hotkey={3} onClick={onReset} price={200}>
                Flashbang
            </Button>

            <Button from={120} to={180} hotkey={4} onClick={onReset} price={300}>
                High Explosive Grenade
            </Button>

            <Button from={180} to={240} hotkey={5} onClick={onReset} price={300}>
                Smoke Grenade
            </Button>

            <Button from={240} to={300} hotkey={6}>
                &nbsp;
            </Button>
        </>
    );
}

function TeamImage() {
    return (
        <img
            className="csgo-buy-menu__team"
            src="https://static.wikia.nocookie.net/cswikia/images/e/e0/Icon-t-patch-small.png"
            alt="CT"
            referrerPolicy="no-referrer"
        />
    );
}

interface ButtonProps extends RadialWheelButtonProps {
    readonly from: number;
    readonly to: number;
    readonly hotkey: number;
    readonly price?: number;
}

function Button(props: ButtonProps) {
    const {
        from,
        to,
        hotkey,
        price,
        children,
        ...rest
    } = props;

    return (
        <Slice className="csgo-buy-menu-slice" from={from} to={to} gapBefore={2} gapAfter={2}>
            <RadialWheelButton className="csgo-buy-menu-button" justify="start" {...rest}>
                <Label className="csgo-buy-menu-button__hotkey" offset={-60}>
                    {hotkey}
                </Label>

                <Label className="csgo-buy-menu-button__item" offset={-140}>
                    <span className="csgo-buy-menu-item">
                        {price &&
                            <span className="csgo-buy-menu-item__price">
                                ${price}
                            </span>
                        }

                        <span className="csgo-buy-menu-item__name">
                            {children}
                        </span>
                    </span>
                </Label>
            </RadialWheelButton>
        </Slice>
    );
}
