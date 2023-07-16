# react-circle-menu

<p>
    <a href="https://www.npmjs.com/package/react-circle-menu" target="_blank" rel="noreferrer">
      <img alt="npm" src="https://img.shields.io/npm/v/react-circle-menu.svg" />
    </a>&nbsp;
    <a href="https://github.com/michaelbull/react-circle-menu/actions?query=workflow%3Aci" target="_blank" rel="noreferrer">
      <img alt="CI Status" src="https://github.com/michaelbull/react-circle-menu/workflows/ci/badge.svg" />
    </a>&nbsp;
    <a href="https://github.com/michaelbull/react-circle-menu/blob/master/LICENSE" target="_blank" rel="noreferrer">
      <img alt="License" src="https://img.shields.io/github/license/michaelbull/react-circle-menu.svg" />
    </a>
</p>
<p>
  <a href="https://ko-fi.com/R5R0CFMN6" target="_blank" rel="noreferrer">
    <img alt="ko-fi" src="https://ko-fi.com/img/githubbutton_sm.svg" />
  </a>
</p>

React components & hooks for building a [radial pie menu][wikipedia-pie-menu].

[Demo][storybook]

## Installation

```shell
npm install --save react-circle-menu
```

## Examples

<table>
  <tbody>
    <tr>
      <td align="center" width="50%">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--cs-go-buy-menu-story" target="_blank"><img src="https://github.com/michaelbull/react-circle-menu/assets/3253134/85928f64-30f3-41d5-939d-a7523e88540a" alt="CS:GO Buy Menu" /></a>
        <br />
        <strong>CS:GO Buy Menu</strong>
        <br />
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--cs-go-buy-menu-story" target="_blank">Demo</a>
        ·
        <a href="https://github.com/michaelbull/react-circle-menu/blob/master/stories/Examples/CsGoBuyMenu.stories.tsx" target="_blank">Code</a>
        <br />
        &nbsp;
      </td>
      <td align="center" width="50%">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--gta-weapon-menu-story" target="_blank"><img src="https://github.com/michaelbull/react-circle-menu/assets/3253134/3d45ef7c-2a75-4b66-891f-4bdb345844b6" alt="GTA Weapon Menu" /></a>
        <br />
        <strong>GTA Weapon Menu</strong>
        <br />
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--gta-weapon-menu-story" target="_blank">Demo</a>
        ·
        <a href="https://github.com/michaelbull/react-circle-menu/blob/master/stories/Examples/GtaWeaponMenu.stories.tsx" target="_blank">Code</a>
        <br />
        &nbsp;
      </td>
    </tr>
    <tr>
      <td align="center" width="50%">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--lo-l-ping-menu-story" target="_blank"><img src="https://github.com/michaelbull/react-circle-menu/assets/3253134/8099e467-db4d-421f-8440-68e8d9d5d919" alt="LoL Ping Menu" /></a>
        <br />
        <strong>LoL Ping Menu</strong>
        <br />
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--lo-l-ping-menu-story" target="_blank">Demo</a>
        ·
        <a href="https://github.com/michaelbull/react-circle-menu/blob/master/stories/Examples/LoLPingMenu.stories.tsx" target="_blank">Code</a>
        <br />
        &nbsp;
      </td>
      <td align="center" width="50%">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--wheel-of-fortune-story" target="_blank"><img src="https://github.com/michaelbull/react-circle-menu/assets/3253134/7a41021f-3666-4c2d-997c-61d7db65e909" alt="Wheel of Fortune" /></a>
        <br />
        <strong>Wheel of Fortune</strong>
        <br />
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--wheel-of-fortune-story" target="_blank">Demo</a>
        ·
        <a href="https://github.com/michaelbull/react-circle-menu/blob/master/stories/Examples/WheelOfFortune.stories.tsx" target="_blank">Code</a>
        <br />
        &nbsp;
      </td>
    </tr>
  </tbody>
</table>

## Example

```tsx
import {
    CircleMenu,
    Label,
    Layout,
    Slice
} from 'react-circle-menu';

export function Example() {
    const red: CSSProperties = { backgroundColor: 'red', color: 'white' };
    const yellow: CSSProperties = { backgroundColor: 'yellow', color: 'black' };
    const green: CSSProperties = { backgroundColor: 'green', color: 'white' };
    const blue: CSSProperties = { backgroundColor: 'blue', color: 'white' };

    function onClickBlue(event: MouseEvent<HTMLButtonElement>) {
        console.log('Clicked blue', event);
    }

    return (
        <CircleMenu style={{ width: 300, height: 300 }}>
            <Slice from={315} to={45} style={red}>
                <Layout>
                    <Label>Red</Label>
                </Layout>
            </Slice>

            <Slice from="45deg" to="37.5%" style={yellow}>
                <Layout direction="vertical" justify="start">
                    <Label orient="outwards" offset={-30}>Start</Label>
                </Layout>

                <Layout direction="horizontal" justify="center">
                    <Label orient="upwards" offset={-10}>Up</Label>
                    <Label orient="downwards" offset={-10}>Down</Label>
                </Layout>

                <Layout direction="vertical" justify="end">
                    <Label orient="inwards" offset={10}>End</Label>
                </Layout>
            </Slice>

            <Slice from="37.5%" to="3.92699rad" style={blue} as="button" onClick={onClickBlue}>
                <Layout>
                    <Label>Blue</Label>
                </Layout>
            </Slice>

            <Slice from="3.92699rad" to="0.875turn" style={green} as="a" href="https://example.com" target="_blank">
                <Layout>
                    <Label>Green</Label>
                </Layout>
            </Slice>
        </CircleMenu>
    );
}
```

## Usage

A `<CircleMenu>` is composed of one or more `<Slice>`s.

Each `<Slice>` must specify the angle it starts `from` and spans `to`, such as:

- A right-angled slice in [degrees][degree]:
  - `<Slice from={0} to={90} />`
- An acute-angled slice in [radians][radian]:
  - `<Slice from="1rad" to="2rad" />`
- An obtuse-angled slice in [gradians][gradian]:
  - `<Slice from="100grad" to="210grad" />`
- A right-angled slice in [turns][turn]:
  - `<Slice from="0.5turn" to="0.75turn" />`
- An obtuse-angled slice in percentages:
  - `<Slice from="50%" to="85%" />`

The `<Layout>` of a slice determines how the `<Label>`s inside of it are laid
out.

In the `<Layout>` below, the `<Label>` is positioned at the edge of the slice
with the the text facing inwards to the center of the circle.

```tsx
<Slice from={0} to={90}>
    <Layout direction="vertical" justify="end">
        <Label orient="inwards">Inwards Label</Label>
    </Layout>
</Slice>
```

## Contributing

Bug reports and pull requests are welcome on [GitHub][github].

## License

This project is available under the terms of the ISC license. See the
[`LICENSE`](LICENSE) file for the copyright information and licensing terms.

[npm]: https://www.npmjs.com/package/react-circle-menu
[github]: https://github.com/michaelbull/react-circle-menu
[storybook]: https://michaelbull.github.io/react-circle-menu/?path=/story/examples
[wikipedia-pie-menu]: https://en.wikipedia.org/wiki/Pie_menu
[degree]: https://en.wikipedia.org/wiki/Degree_(angle)
[radian]: https://en.wikipedia.org/wiki/Radian
[gradian]: https://en.wikipedia.org/wiki/Gradian
[turn]: https://en.wikipedia.org/wiki/Turn_(angle)
