import type {
    Meta,
    StoryObj,
} from '@storybook/react-vite';
import { clsx } from 'clsx';
import type { Angle } from '../../../angle/Angle';
import { Label } from '../../../label/Label';
import { Layout } from '../../../layout/Layout';
import { Segment } from '../../../segment/Segment';
import { Spoke } from '../../../spoke/Spoke';
import { Wheel } from '../../../wheel/Wheel';
import './GenshinImpact.css';

const meta = {
    title: 'Examples',
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta;

export default meta;

export const GenshinImpact: StoryObj = {
    parameters: {
        options: {
            bottomPanelHeight: 0,
            rightPanelWidth: 0,
        },
    },
    render: () => (
        <div className="genshin">
            <div className="genshin-background"/>
            <Menu/>
        </div>
    ),
};

function Menu() {
    return (
        <Wheel className="genshin-menu">
            <div className="genshin-menu__bottom"/>

            <Shortcut
                from={337.5}
                to={22.5}
                name="wish"
                label="Wish"
            />

            <Shortcut
                from={22.5}
                to={67.5}
                name="handbook"
                label="Adventurer Handbook"
            />

            <Shortcut
                from={67.5}
                to={112.5}
                name="inventory"
                label="Inventory"
            />

            <Shortcut
                from={112.5}
                to={157.5}
                name="character"
                label="Character"
            />

            <Shortcut
                from={157.5}
                to={202.5}
                name="map"
                label="Map"
            />

            <Shortcut
                from={202.5}
                to={247.5}
                name="quests"
                label="Quests"
            />

            <Shortcut
                from={247.5}
                to={292.5}
                name="events"
                label="Events"
            />

            <Shortcut
                from={292.5}
                to={337.5}
                name="battle-pass"
                label="Battle Pass"
            />

            <Divider angle={22.5}/>
            <Divider angle={67.5}/>
            <Divider angle={112.5}/>
            <Divider angle={157.5}/>
            <Divider angle={202.5}/>
            <Divider angle={247.5}/>
            <Divider angle={292.5}/>
            <Divider angle={337.5}/>

            <div className="genshin-menu__top"/>
        </Wheel>
    );
}

interface ShortcutProps {
    readonly from: number;
    readonly to: number;
    readonly name: string;
    readonly label: string;
}

function Shortcut(props: ShortcutProps) {
    const {
        from,
        to,
        name,
        label,
    } = props;

    const iconClassName = clsx('genshin-shortcut__icon', `genshin-shortcut__icon--${name}`);

    return (
        <Segment as="button" className="genshin-shortcut" from={from} to={to} aria-label={label}>
            <Layout className="genshin-shortcut__layout" justify="end">
                <Label className="genshin-shortcut__label" offset={54}>
                    <span className={iconClassName}/>
                </Label>
            </Layout>
        </Segment>
    );
}

interface DividerProps {
    readonly angle: Angle;
}

function Divider(props: DividerProps) {
    const { angle } = props;

    return <Spoke
        className="genshin-menu__divider"
        angle={angle}
        offset={-125}
    />;
}
