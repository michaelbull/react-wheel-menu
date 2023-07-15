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
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--cs-go-buy-menu-story" target="_blank">
          <img src="https://github.com/michaelbull/react-circle-menu/assets/3253134/85928f64-30f3-41d5-939d-a7523e88540a" alt="CS:GO Buy Menu" />
        </a>
        <br />
        <strong>CS:GO Buy Menu</strong>
        <br />
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--cs-go-buy-menu-story" target="_blank">
          Demo
        </a>
        ·
        <a href="https://github.com/michaelbull/react-circle-menu/blob/master/stories/Examples/CsGoBuyMenu.stories.tsx" target="_blank">
          Code
        </a>
        <br />
        &nbsp;
      </td>
      <td align="center" width="50%">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--gta-weapon-menu-story" target="_blank">
          <img src="https://github.com/michaelbull/react-circle-menu/assets/3253134/3d45ef7c-2a75-4b66-891f-4bdb345844b6" alt="GTA Weapon Menu" />
        </a>
        <br />
        <strong>GTA Weapon Menu</strong>
        <br />
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--gta-weapon-menu-story" target="_blank">
          Demo
        </a>
        ·
        <a href="https://github.com/michaelbull/react-circle-menu/blob/master/stories/Examples/GtaWeaponMenu.stories.tsx" target="_blank">
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
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--lo-l-ping-menu-story" target="_blank">
          <img src="https://github.com/michaelbull/react-circle-menu/assets/3253134/8099e467-db4d-421f-8440-68e8d9d5d919" alt="LoL Ping Menu" />
        </a>
        <br />
        <strong>LoL Ping Menu</strong>
        <br />
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--lo-l-ping-menu-story" target="_blank">
          Demo
        </a>
        ·
        <a href="https://github.com/michaelbull/react-circle-menu/blob/master/stories/Examples/LoLPingMenu.stories.tsx" target="_blank">
          Code
        </a>
        <br />
        &nbsp;
      </td>
      <td align="center" width="50%">
        &nbsp;
        <br />
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--wheel-of-fortune-story" target="_blank">
          <img src="https://github.com/michaelbull/react-circle-menu/assets/3253134/7a41021f-3666-4c2d-997c-61d7db65e909" alt="Wheel of Fortune" />
        </a>
        <br />
        <strong>Wheel of Fortune</strong>
        <br />
        <a href="https://michaelbull.github.io/react-circle-menu/?path=/story/examples--wheel-of-fortune-story" target="_blank">
          Demo
        </a>
        ·
        <a href="https://github.com/michaelbull/react-circle-menu/blob/master/stories/Examples/WheelOfFortune.stories.tsx" target="_blank">
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
    CircleMenu,
    Item,
    Label,
    Slice
} from 'react-circle-menu';

export function Example() {
    function onClickBlue() {
        console.log('Clicked blue');
    }

    return (
        <CircleMenu style={{ width: 300, height: 300 }}>
            <Slice from={300} to={60}>
                <Item style={{ backgroundColor: 'red' }}>
                    <Label style={{ color: 'white' }}>
                        Red
                    </Label>
                </Item>
            </Slice>

            <Slice from={60} to={180}>
                <Button style={{ backgroundColor: 'blue' }} onClick={onClickBlue}>
                    <Label style={{ color: 'white' }}>
                        Blue
                    </Label>
                </Button>
            </Slice>

            <Slice from={180} to={300}>
                <Anchor style={{ backgroundColor: 'green' }} href="https://www.example.com" target="_blank">
                    <Label style={{ color: 'white' }}>
                        Green
                    </Label>
                </Anchor>
            </Slice>
        </CircleMenu>
    )
}
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
