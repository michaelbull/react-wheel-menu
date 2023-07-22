# react-wheel-menu

<p>
    <a href="https://www.npmjs.com/package/react-wheel-menu" target="_blank" rel="noreferrer"><img alt="npm" src="https://img.shields.io/npm/v/react-wheel-menu.svg" /></a>&nbsp;
    <a href="https://github.com/michaelbull/react-wheel-menu/actions?query=workflow%3Aci" target="_blank" rel="noreferrer"><img alt="CI Status" src="https://github.com/michaelbull/react-wheel-menu/workflows/ci/badge.svg" /></a>&nbsp;
    <a href="https://github.com/michaelbull/react-wheel-menu/blob/master/LICENSE" target="_blank" rel="noreferrer"><img alt="License" src="https://img.shields.io/github/license/michaelbull/react-wheel-menu.svg" /></a>
</p>
<p>
  <a href="https://ko-fi.com/R5R0CFMN6" target="_blank" rel="noreferrer">
    <img alt="ko-fi" src="https://ko-fi.com/img/githubbutton_sm.svg" />
  </a>
</p>

React components & hooks for building a [radial wheel menu][wikipedia-pie-menu].

[Demo][storybook]

## Installation

```shell
npm install --save react-wheel-menu
```

## Examples

<table>
  <tbody>
    <tr>
      <td align="center">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-wheel-menu/?path=/story/examples--overwatch-story" target="_blank"><img src="https://github.com/michaelbull/react-wheel-menu/assets/3253134/89f5cd2c-71b8-41b0-a19a-8dc63ec149e0" alt="Overwatch" /></a>
        <br />
        <strong>Overwatch</strong>
        <br />
        <a href="https://michaelbull.github.io/react-wheel-menu/?path=/story/examples--overwatch-story" target="_blank">Demo</a>
        ·
        <a href="https://github.com/michaelbull/react-wheel-menu/blob/master/stories/Examples/Overwatch/Overwatch.stories.tsx" target="_blank">Code</a>
        <br />
        &nbsp;
      </td>
      <td align="center">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-wheel-menu/?path=/story/examples--counter-strike-story" target="_blank"><img src="https://github.com/michaelbull/react-wheel-menu/assets/3253134/a0dec421-10dd-43e3-b335-b26a00c6f4c2" alt="Counter-Strike" /></a>
        <br />
        <strong>Counter-Strike</strong>
        <br />
        <a href="https://michaelbull.github.io/react-wheel-menu/?path=/story/examples--counter-strike-story" target="_blank">Demo</a>
        ·
        <a href="https://github.com/michaelbull/react-wheel-menu/blob/master/stories/Examples/CounterStrike/CounterStrike.stories.tsx" target="_blank">Code</a>
        <br />
        &nbsp;
      </td>
      <td align="center">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-wheel-menu/?path=/story/examples--grand-theft-auto-story" target="_blank"><img src="https://github.com/michaelbull/react-wheel-menu/assets/3253134/5442c291-0f29-4d63-ae51-9b3982b0635e" alt="Grand Theft Auto" /></a>
        <br />
        <strong>Grand Theft Auto</strong>
        <br />
        <a href="https://michaelbull.github.io/react-wheel-menu/?path=/story/examples--grand-theft-auto-story" target="_blank">Demo</a>
        ·
        <a href="https://github.com/michaelbull/react-wheel-menu/blob/master/stories/Examples/GrandTheftAuto/GrandTheftAuto.stories.tsx" target="_blank">Code</a>
        <br />
        &nbsp;
      </td>
    </tr>
    <tr>
      <td align="center">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-wheel-menu/?path=/story/examples--league-of-legends-story" target="_blank"><img src="https://github.com/michaelbull/react-wheel-menu/assets/3253134/27812098-f3ff-446e-a794-1d26144d0cf5" alt="League of Legends" /></a>
        <br />
        <strong>League of Legends</strong>
        <br />
        <a href="https://michaelbull.github.io/react-wheel-menu/?path=/story/examples--league-of-legends-story" target="_blank">Demo</a>
        ·
        <a href="https://github.com/michaelbull/react-wheel-menu/blob/master/stories/Examples/LeagueOfLegends/LeagueOfLegends.stories.tsx" target="_blank">Code</a>
        <br />
        &nbsp;
      </td>
      <td align="center">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-wheel-menu/?path=/story/examples--genshin-impact-story" target="_blank"><img src="https://github.com/michaelbull/react-wheel-menu/assets/3253134/ef6b192c-13a9-45e4-9826-c9ea2d64d94a" alt="Genshin Impact" /></a>
        <br />
        <strong>Genshin Impact</strong>
        <br />
        <a href="https://michaelbull.github.io/react-wheel-menu/?path=/story/examples--genshin-impact-story" target="_blank">Demo</a>
        ·
        <a href="https://github.com/michaelbull/react-wheel-menu/blob/master/stories/Examples/GenshinImpact/GenshinImpact.stories.tsx" target="_blank">Code</a>
        <br />
        &nbsp;
      </td>
    </tr>
  </tbody>
</table>

## Usage

```tsx
import { CSSProperties } from 'react';
import {
    Label,
    Layout,
    Segment,
    Wheel
} from 'react-wheel-menu';

export function Example() {
    const red: CSSProperties = { backgroundColor: 'red', color: 'white' };
    const yellow: CSSProperties = { backgroundColor: 'yellow', color: 'black' };
    const green: CSSProperties = { backgroundColor: 'green', color: 'white' };
    const blue: CSSProperties = { backgroundColor: 'blue', color: 'white' };

    function onClickBlue(event: MouseEvent<HTMLButtonElement>) {
        console.log('Clicked blue', event);
    }

    return (
        <Wheel style={{ width: 300, height: 300 }}>
            <Segment from={315} to={45} style={red}>
                <Layout>
                    <Label>Red</Label>
                </Layout>
            </Segment>

            <Segment from="45deg" to="37.5%" style={yellow}>
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
            </Segment>

            <Segment from="37.5%" to="3.92699rad" style={blue} as="button" onClick={onClickBlue}>
                <Layout>
                    <Label>Blue</Label>
                </Layout>
            </Segment>

            <Segment from="3.92699rad" to="0.875turn" style={green} as="a" href="https://example.com" target="_blank">
                <Layout>
                    <Label>Green</Label>
                </Layout>
            </Segment>
        </Wheel>
    );
}
```

## Components

### `<Segment>`

A `<Segment>` must specify the angle it starts `from` and spans `to`, for example:

- A right-angled segment in [degrees][degree]:
    - `<Segment from={0} to={90} />`
- An acute-angled segment in [radians][radian]:
    - `<Segment from="1rad" to="2rad" />`
- An obtuse-angled segment in [gradians][gradian]:
    - `<Segment from="100grad" to="210grad" />`
- A right-angled segment in [turns][turn]:
    - `<Segment from="0.5turn" to="0.75turn" />`
- An obtuse-angled segment in percentages:
    - `<Segment from="50%" to="85%" />`

### `<Spoke>`

A `<Spoke>` is a straight line radiating from the centre of the `<Wheel>`.

Spokes can be used to visually split segments, for example:

```tsx
<Wheel style={{ width: 300, height: 300 }}>
    <Segment from="0deg" to="45deg" style={{ background: 'red' }} />
    <Segment from="45deg" to="90deg" style={{ background: 'blue' }} />
    <Spoke angle="45deg" style={{ background: 'white', height: '100px' }} />
</Wheel>
```

### `<Layout>`

A `<Layout>` controls the distribution and orientation of `<Label>`s inside a
`<Segment>` or `<Spoke>`.

In the `<Layout>` below, the `<Label>` is positioned at the edge of the segment
with the text facing inwards to the center of the wheel.

```tsx
<Wheel style={{ width: 300, height: 300 }}>
    <Segment from={0} to={90}>
        <Layout direction="vertical" justify="end">
            <Label orient="inwards">Inwards Label</Label>
        </Layout>
    </Segment>

    <Spoke angle="45deg" style={{ width: '10px' }}>
        <Layout direction="vertical">
            <Label orient="inwards">Outwards Label</Label>
        </Layout>
    </Spoke>
</Wheel>
```

## Contributing

Bug reports and pull requests are welcome on [GitHub][github].

## License

This project is available under the terms of the ISC license. See the
[`LICENSE`](LICENSE) file for the copyright information and licensing terms.

[npm]: https://www.npmjs.com/package/react-wheel-menu
[github]: https://github.com/michaelbull/react-wheel-menu
[storybook]: https://michaelbull.github.io/react-wheel-menu/?path=/story/examples
[wikipedia-pie-menu]: https://en.wikipedia.org/wiki/Pie_menu
[degree]: https://en.wikipedia.org/wiki/Degree_(angle)
[radian]: https://en.wikipedia.org/wiki/Radian
[gradian]: https://en.wikipedia.org/wiki/Gradian
[turn]: https://en.wikipedia.org/wiki/Turn_(angle)
