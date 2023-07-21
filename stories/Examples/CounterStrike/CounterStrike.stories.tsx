import './CounterStrike.css';
import {
    Meta,
    StoryObj
} from '@storybook/react';
import {
    ComponentProps,
    ReactNode,
    useState
} from 'react';
import {
    CircleMenu,
    Label,
    Layout,
    Segment
} from '../../../src';

const meta: Meta = {
    title: 'Examples',
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;

export const CounterStrikeStory: StoryObj = {
    name: 'Counter-Strike',
    parameters: {
        options: { showPanel: false }
    },
    render: () => {
        return (
            <div className="cs">
                <div className="cs-background" />
                <Menu />
            </div>
        );
    }
};

function Menu() {
    const [submenu, setSubMenu] = useState<ReactNode>(null);

    function onReset() {
        setSubMenu(null);
    }

    return (
        <CircleMenu as="ol" className="cs-menu">
            {submenu ?? <RootMenu onReset={onReset} onChoose={setSubMenu} />}
            <TeamImage />
        </CircleMenu>
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
            <Item from={300} to={0} hotkey={1} onClick={() => onChoose(<PistolsMenu onReset={onReset} />)}>
                PISTOLS
            </Item>

            <Item from={0} to={60} hotkey={2} onClick={() => onChoose(<HeavyMenu onReset={onReset} />)}>
                HEAVY
            </Item>

            <Item from={60} to={120} hotkey={3} onClick={() => onChoose(<SmgsMenu onReset={onReset} />)}>
                SMGs
            </Item>

            <Item from={120} to={180} hotkey={4} onClick={() => onChoose(<RiflesMenu onReset={onReset} />)}>
                RIFLES
            </Item>

            <Item from={180} to={240} hotkey={5} onClick={() => onChoose(<GearMenu onReset={onReset} />)}>
                GEAR
            </Item>

            <Item from={240} to={300} hotkey={6} onClick={() => onChoose(<GrenadesMenu onReset={onReset} />)}>
                GRENADES
            </Item>
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
            <Item from={300} to={360} hotkey={1} onClick={onReset} price={200}>
                Glock-18
            </Item>

            <Item from={0} to={60} hotkey={2} onClick={onReset} price={500}>
                Dual Berettas
            </Item>

            <Item from={60} to={120} hotkey={3} onClick={onReset} price={300}>
                P250
            </Item>

            <Item from={120} to={180} hotkey={4} onClick={onReset} price={500}>
                CZ75-Auto
            </Item>

            <Item from={180} to={240} hotkey={5} onClick={onReset} price={700}>
                Desert Eagle
            </Item>

            <Item from={240} to={300} hotkey={6}>
                &nbsp;
            </Item>
        </>
    );
}

function HeavyMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <>
            <Item from={300} to={360} hotkey={1} onClick={onReset} price={1200}>
                Nova
            </Item>

            <Item from={0} to={60} hotkey={2} onClick={onReset} price={2000}>
                XM1014
            </Item>

            <Item from={60} to={120} hotkey={3} onClick={onReset} price={1200}>
                Sawed-Off
            </Item>

            <Item from={120} to={180} hotkey={4} onClick={onReset} price={5200}>
                M249
            </Item>

            <Item from={180} to={240} hotkey={5} onClick={onReset} price={5700}>
                Negev
            </Item>

            <Item from={240} to={300} hotkey={6}>
                &nbsp;
            </Item>
        </>
    );
}

function SmgsMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <>
            <Item from={300} to={360} hotkey={1} onClick={onReset} price={1050}>
                MAC-10
            </Item>

            <Item from={0} to={60} hotkey={2} onClick={onReset} price={1700}>
                MP7
            </Item>

            <Item from={60} to={120} hotkey={3} onClick={onReset} price={1200}>
                UMP-45
            </Item>

            <Item from={120} to={180} hotkey={4} onClick={onReset} price={2350}>
                P90
            </Item>

            <Item from={180} to={240} hotkey={5} onClick={onReset} price={1400}>
                PP-Bizon
            </Item>

            <Item from={240} to={300} hotkey={6}>
                &nbsp;
            </Item>
        </>
    );
}

function RiflesMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <>
            <Item from={300} to={360} hotkey={1} onClick={onReset} price={2000}>
                Galil AR
            </Item>

            <Item from={0} to={60} hotkey={2} onClick={onReset} price={2700}>
                AK-47
            </Item>

            <Item from={60} to={120} hotkey={3} onClick={onReset} price={1700}>
                SSG 08
            </Item>

            <Item from={120} to={180} hotkey={4} onClick={onReset} price={3000}>
                SG 553
            </Item>

            <Item from={180} to={240} hotkey={5} onClick={onReset} price={4750}>
                AWP
            </Item>

            <Item from={240} to={300} hotkey={6} onClick={onReset} price={5000}>
                G3SG1
            </Item>
        </>
    );
}

function GearMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <>
            <Item from={315} to={45} hotkey={1} onClick={onReset} price={650}>
                Kevlar Vest
            </Item>

            <Item from={45} to={135} hotkey={2} onClick={onReset} price={1000}>
                Kevlar + Helmet
            </Item>

            <Item from={135} to={225} hotkey={3} onClick={onReset} price={400}>
                Zeus x27
            </Item>

            <Item from={225} to={315} hotkey={4} onClick={onReset} price={400}>
                Defuse Kit
            </Item>
        </>
    );
}

function GrenadesMenu(props: SubMenuProps) {
    const { onReset } = props;

    return (
        <>
            <Item from={300} to={360} hotkey={1} onClick={onReset} price={400}>
                Molotov
            </Item>

            <Item from={0} to={60} hotkey={2} onClick={onReset} price={50}>
                Decoy Grenade
            </Item>

            <Item from={60} to={120} hotkey={3} onClick={onReset} price={200}>
                Flashbang
            </Item>

            <Item from={120} to={180} hotkey={4} onClick={onReset} price={300}>
                High Explosive Grenade
            </Item>

            <Item from={180} to={240} hotkey={5} onClick={onReset} price={300}>
                Smoke Grenade
            </Item>

            <Item from={240} to={300} hotkey={6}>
                &nbsp;
            </Item>
        </>
    );
}

function TeamImage() {
    return (
        <div className="cs-menu__team" />
    );
}

interface ItemProps extends ComponentProps<'button'> {
    readonly from: number;
    readonly to: number;
    readonly hotkey: number;
    readonly price?: number;
}

function Item(props: ItemProps) {
    const {
        from,
        to,
        hotkey,
        price,
        children,
        ...rest
    } = props;

    return (
        <Segment as="li" className="cs-item" from={from} to={to} gapBefore={2} gapAfter={2}>
            <Layout as="button" className="cs-item__button" justify="start" {...rest}>
                <Label className="cs-item__hotkey" offset={-60} aria-hidden>
                    {hotkey}
                </Label>

                <Label className="cs-item__details" offset={-140}>
                    <span className="cs-item-details">
                        <span className="cs-item-details__name">
                            {children}
                        </span>

                        {price &&
                            <span className="cs-item-details__price">
                                ${price}
                            </span>
                        }
                    </span>
                </Label>
            </Layout>
        </Segment>
    );
}
