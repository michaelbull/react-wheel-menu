# react-radial-wheel

<p>
    <a href="https://www.npmjs.com/package/react-radial-wheel" target="_blank" rel="noreferrer">
      <img alt="npm" src="https://img.shields.io/npm/v/react-radial-wheel.svg" />
    </a>&nbsp;
    <a href="https://github.com/michaelbull/react-radial-wheel/actions?query=workflow%3Aci" target="_blank" rel="noreferrer">
      <img alt="CI Status" src="https://github.com/michaelbull/kotlin-result/workflows/ci/badge.svg" />
    </a>&nbsp;
    <a href="https://github.com/michaelbull/react-radial-wheel/blob/master/LICENSE" target="_blank" rel="noreferrer">
      <img alt="License" src="https://img.shields.io/github/license/michaelbull/react-radial-wheel.svg" />
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
npm install --save react-radial-wheel
```

## Examples

<table>
  <tbody>
    <tr>
      <td align="center" width="50%">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-radial-wheel/?path=/story/examples--cs-go-buy-menu-story" target="_blank">
          <img src="https://github.com/michaelbull/react-radial-wheel/assets/3253134/85928f64-30f3-41d5-939d-a7523e88540a" alt="CS:GO Buy Menu" />
        </a>
        <br />
        <strong>CS:GO Buy Menu</strong>
        <br />
        <a href="https://michaelbull.github.io/react-radial-wheel/?path=/story/examples--cs-go-buy-menu-story" target="_blank">
          Demo
        </a>
        &middot;
        <a href="https://github.com/michaelbull/react-radial-wheel/blob/master/stories/Examples/CsGoBuyMenu.stories.tsx" target="_blank">
          Code
        </a>
        <br />
        &nbsp;
      </td>
      <td align="center" width="50%">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-radial-wheel/?path=/story/examples--gta-weapon-menu-story" target="_blank">
          <img src="https://github.com/michaelbull/react-radial-wheel/assets/3253134/3d45ef7c-2a75-4b66-891f-4bdb345844b6" alt="GTA Weapon Menu" />
        </a>
        <br />
        <strong>GTA Weapon Menu</strong>
        <br />
        <a href="https://michaelbull.github.io/react-radial-wheel/?path=/story/examples--gta-weapon-menu-story" target="_blank">
          Demo
        </a>
        &middot;
        <a href="https://github.com/michaelbull/react-radial-wheel/blob/master/stories/Examples/GtaWeaponMenu.stories.tsx" target="_blank">
          Code
        </a>
        <br />
        &nbsp;
      </td>
    </tr>
    <tr>
      <td align="center" width="50%">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-radial-wheel/?path=/story/examples--lo-l-ping-menu-story" target="_blank">
          <img src="https://github.com/michaelbull/react-radial-wheel/assets/3253134/8099e467-db4d-421f-8440-68e8d9d5d919" alt="LoL Ping Menu" />
        </a>
        <br />
        <strong>LoL Ping Menu</strong>
        <br />
        <a href="https://michaelbull.github.io/react-radial-wheel/?path=/story/examples--lo-l-ping-menu-story" target="_blank">
          Demo
        </a>
        &middot;
        <a href="https://github.com/michaelbull/react-radial-wheel/blob/master/stories/Examples/LoLPingMenu.stories.tsx" target="_blank">
          Code
        </a>
        <br />
        &nbsp;
      </td>
      <td align="center" width="50%">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-radial-wheel/?path=/story/examples--wheel-of-fortune-story" target="_blank">
          <img src="https://github.com/michaelbull/react-radial-wheel/assets/3253134/7a41021f-3666-4c2d-997c-61d7db65e909" alt="Wheel of Fortune" />
        </a>
        <br />
        <strong>Wheel of Fortune</strong>
        <br />
        <a href="https://michaelbull.github.io/react-radial-wheel/?path=/story/examples--wheel-of-fortune-story" target="_blank">
          Demo
        </a>
        &middot;
        <a href="https://github.com/michaelbull/react-radial-wheel/blob/master/stories/Examples/WheelOfFortune.stories.tsx" target="_blank">
          Code
        </a>
        <br />
        &nbsp;
      </td>
    </tr>
  </tbody>
</table>

## Usage

```tsx
import {
    Anchor,
    Button,
    Item,
    Label,
    RadialWheel,
    Slice
} from 'react-radial-wheel';

export function Example() {
    function onClickBlue() {
        console.log('Clicked blue');
    }

    return (
        <RadialWheel style={{width: 300, height: 300}}>
            <Slice from={0} to={120}>
                <Item style={{backgroundColor: 'red'}}>
                    Red
                </Item>
            </Slice>

            <Slice from={120} to={240}>
                <Button style={{backgroundColor: 'blue'}} onClick={onClickBlue}>
                    Blue
                </Button>
            </Slice>

            <Slice from={240} to={360}>
                <Anchor style={{backgroundColor: 'green'}} href="https://www.example.com">
                    Green
                </Anchor>
            </Slice>
        </RadialWheel>
    )
}
```

## Contributing

Bug reports and pull requests are welcome on [GitHub][github].

## License

This project is available under the terms of the ISC license. See the
[`LICENSE`](LICENSE) file for the copyright information and licensing terms.

[npm]: https://www.npmjs.com/package/react-radial-wheel
[github]: https://github.com/michaelbull/react-radial-wheel

[storybook]: https://michaelbull.github.io/react-radial-wheel/?path=/story/examples

[wikipedia-pie-menu]: https://en.wikipedia.org/wiki/Pie_menu
