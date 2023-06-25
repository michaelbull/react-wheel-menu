import React, {
    CSSProperties,
    ReactNode,
    useState
} from 'react';
import {
    RadialWheel,
    RadialWheelButton,
    RadialWheelButtonProps
} from '../../src';
import {
    Meta,
    StoryObj
} from '@storybook/react';
import './csgo.css';
import { RadialWheelLabel } from '../../src/components/RadialWheelLabel';

const meta: Meta = {
    title: 'Examples',
    parameters: {
        layout: 'centered'
    }
};

export default meta;

export const CsGoBuyMenu: StoryObj = {
    name: 'CS:GO Buy Menu',
    render: () => {
        const [submenu, setSubMenu] = useState<ReactNode>(null);

        function onReset() {
            setSubMenu(null);
        }

        return (
            <div className="csgo-buy-menu">
                <TeamImage />
                {submenu ?? <RootMenu onReset={onReset} onChoose={setSubMenu} />}
            </div>
        );
    }
};

interface RootMenuProps {
    readonly onReset: () => void;
    readonly onChoose: (submenu: ReactNode) => void;
}

function RootMenu(props: RootMenuProps) {
    const { onReset, onChoose } = props;

    return (
        <RadialWheel className="csgo-buy-menu__wheel" startAngle={-30} direction="cw">
            <Button hotkey={1} onClick={() => onChoose(<PistolsMenu onReset={onReset} />)}>PISTOLS</Button>
            <Button hotkey={2} onClick={() => onChoose(<HeavyMenu onReset={onReset} />)}>HEAVY</Button>
            <Button hotkey={3} onClick={() => onChoose(<SmgsMenu onReset={onReset} />)}>SMGs</Button>
            <Button hotkey={4} onClick={() => onChoose(<RiflesMenu onReset={onReset} />)}>RIFLES</Button>
            <Button hotkey={5} onClick={() => onChoose(<GearMenu onReset={onReset} />)}>GEAR</Button>
            <Button hotkey={6} onClick={() => onChoose(<GrenadesMenu onReset={onReset} />)}>GRENADES</Button>
        </RadialWheel>
    );
}

interface SubMenuProps {
    readonly onReset: () => void;
}

function PistolsMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <RadialWheel className="csgo-buy-menu__wheel" startAngle={-30} direction="cw">
            <Button hotkey={1} onClick={onReset} price={200}>Glock-18</Button>
            <Button hotkey={2} onClick={onReset} price={500}>Dual Berettas</Button>
            <Button hotkey={3} onClick={onReset} price={300}>P250</Button>
            <Button hotkey={4} onClick={onReset} price={500}>CZ75-Auto</Button>
            <Button hotkey={5} onClick={onReset} price={700}>Desert Eagle</Button>
            <Button hotkey={6}>&nbsp;</Button>
        </RadialWheel>
    );
}

function HeavyMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <RadialWheel className="csgo-buy-menu__wheel" startAngle={-30} direction="cw">
            <Button hotkey={1} onClick={onReset} price={1200}>Nova</Button>
            <Button hotkey={2} onClick={onReset} price={2000}>XM1014</Button>
            <Button hotkey={3} onClick={onReset} price={1200}>Sawed-Off</Button>
            <Button hotkey={4} onClick={onReset} price={5200}>M249</Button>
            <Button hotkey={5} onClick={onReset} price={5700}>Negev</Button>
            <Button hotkey={6}>&nbsp;</Button>
        </RadialWheel>
    );
}

function SmgsMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <RadialWheel className="csgo-buy-menu__wheel" startAngle={-30} direction="cw">
            <Button hotkey={1} onClick={onReset} price={1050}>MAC-10</Button>
            <Button hotkey={2} onClick={onReset} price={1700}>MP7</Button>
            <Button hotkey={3} onClick={onReset} price={1200}>UMP-45</Button>
            <Button hotkey={4} onClick={onReset} price={2350}>P90</Button>
            <Button hotkey={5} onClick={onReset} price={1400}>PP-Bizon</Button>
            <Button hotkey={6}>&nbsp;</Button>
        </RadialWheel>
    );
}

function RiflesMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <RadialWheel className="csgo-buy-menu__wheel" startAngle={-30} direction="cw">
            <Button hotkey={1} onClick={onReset} price={2000}>Galil AR</Button>
            <Button hotkey={2} onClick={onReset} price={2700}>AK-47</Button>
            <Button hotkey={3} onClick={onReset} price={1700}>SSG 08</Button>
            <Button hotkey={4} onClick={onReset} price={3000}>SG 553</Button>
            <Button hotkey={5} onClick={onReset} price={4750}>AWP</Button>
            <Button hotkey={6} onClick={onReset} price={5000}>G3SG1</Button>
        </RadialWheel>
    );
}

function GearMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <RadialWheel className="csgo-buy-menu__wheel" startAngle={0} direction="cw">
            <Button hotkey={1} onClick={onReset} price={650}>Kevlar Vest</Button>
            <Button hotkey={2} onClick={onReset} price={1000}>Kevlar + Helmet</Button>
            <Button hotkey={3} onClick={onReset} price={400}>Zeus x27</Button>
            <Button hotkey={4} onClick={onReset} price={400}>Defuse Kit</Button>
        </RadialWheel>
    );
}

function GrenadesMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <RadialWheel className="csgo-buy-menu__wheel" startAngle={-30} direction="cw">
            <Button hotkey={1} onClick={onReset} price={400}>Molotov</Button>
            <Button hotkey={2} onClick={onReset} price={50}>Decoy Grenade</Button>
            <Button hotkey={3} onClick={onReset} price={200}>Flashbang</Button>
            <Button hotkey={4} onClick={onReset} price={300}>High Explosive Grenade</Button>
            <Button hotkey={5} onClick={onReset} price={300}>Smoke Grenade</Button>
            <Button hotkey={6}>&nbsp;</Button>
        </RadialWheel>
    );
}

function TeamImage() {
    return (
        <img
            className="csgo-buy-menu__team"
            alt="CT"
            src="https://static.wikia.nocookie.net/cswikia/images/e/e0/Icon-t-patch-small.png"
            width={100}
            height={100}
        />
    );
}

interface ButtonProps extends RadialWheelButtonProps {
    readonly hotkey: number;
    readonly price?: number;
}

function Button(props: ButtonProps) {
    const {
        hotkey,
        price,
        children,
        ...rest
    } = props;

    return (
        <RadialWheelButton className="csgo-buy-menu-button" {...rest}>
            <RadialWheelLabel className="csgo-buy-menu-button__hotkey">
                {hotkey}
            </RadialWheelLabel>

            <RadialWheelLabel className="csgo-buy-menu-button__item">
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
            </RadialWheelLabel>
        </RadialWheelButton>
    );
}
