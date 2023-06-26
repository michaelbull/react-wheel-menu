# react-radial-wheel

<a href="https://www.npmjs.com/package/react-radial-wheel" target="_blank" rel="noreferrer">
  <img alt="npm" src="https://img.shields.io/npm/v/react-radial-wheel.svg" />
</a>&nbsp;
<a href="https://github.com/michaelbull/react-radial-wheel/actions?query=workflow%3Aci" target="_blank" rel="noreferrer">
  <img alt="CI Status" src="https://github.com/michaelbull/kotlin-result/workflows/ci/badge.svg" />
</a>&nbsp;
<a href="https://github.com/michaelbull/react-radial-wheel/blob/master/LICENSE" target="_blank" rel="noreferrer">
  <img alt="License" src="https://img.shields.io/github/license/michaelbull/react-radial-wheel.svg" />
</a>

React components & hooks for page splitting.

[Demo][storybook]

## Installation

```shell
npm install --save react-radial-wheel
```

## Examples

### Basic

- [Horizontal](https://michaelbull.github.io/react-radial-wheel/?path=/story/basic--horizontal)
- [Vertical](https://michaelbull.github.io/react-radial-wheel/?path=/story/basic--vertical)

### Advanced

- [Nested](https://michaelbull.github.io/react-radial-wheel/?path=/story/advanced--nested)
    - Demonstrates nesting page splits within one another.
- [Preset Sizes](https://michaelbull.github.io/react-radial-wheel/?path=/story/advanced--preset-sizes)
    - Demonstrates specifying initial sizes for each panel.
- [Resizes](https://michaelbull.github.io/react-radial-wheel/?path=/story/advanced--resizes)
    - Demonstrates the difference in `Proportional`, `Cascade`, `ReverseCascade`, and `Limit` resizes.
- [Boundaries](https://michaelbull.github.io/react-radial-wheel/?path=/story/advanced--boundaries)
    - Demonstrates setting a `min-width` and `max-width` on a panel.
- [Divider on Hover](https://michaelbull.github.io/react-radial-wheel/?path=/story/advanced--divider-on-hover)
    - Demonstrates a divider that is `11px` wide, but appears `1px` wide until hovered.
- [Divider with Buttons](https://michaelbull.github.io/react-radial-wheel/?path=/story/advanced--divider-with-buttons)
    - Demonstrates embedding a `<button>` on a custom divider.
- [Events](https://michaelbull.github.io/react-radial-wheel/?path=/story/advanced--events)
    - Demonstrates listening to the events published when a divider is dragged.
- [Expand Collapse](https://michaelbull.github.io/react-radial-wheel/?path=/story/advanced--expand-collapse)
    - Demonstrates expanding & collapsing panels on `<button>` click.

## Usage

```tsx
import {
    HorizontalPageSplit,
    VerticalPageSplit
} from 'react-radial-wheel';
import 'react-radial-wheel/style.css';

function Example() {
    return (
        <HorizontalPageSplit widths={['20%', '50%', '30%']}>
            <VerticalPageSplit>
                <div>Top left</div>
                <div>Middle left</div>
                <div>Bottom left</div>
            </VerticalPageSplit>

            <div>Middle</div>

            <VerticalPageSplit heights={['25%', '75%']}>
                <div>Top right</div>
                <div>Bottom right</div>
            </VerticalPageSplit>
        </HorizontalPageSplit>
    )
}
```

![Example](images/example.png)

## Resizes

There are four defined resizes that occur when dragging a divider. The default is for panels to be resized at
a `Proportional` rate.

A custom `Resize` can also be provided.

[Demo](https://michaelbull.github.io/react-radial-wheel/?path=/story/advanced--resizes)

### Proportional

A `Proportional` resize affects all panels across the axis at a proportionally equal rate.

![Proportional resize](images/proportional.gif)

<details>
<summary>Code</summary>
<p>

```tsx
import {
    HorizontalPageSplit,
    Proportional
} from 'react-radial-wheel';
import 'react-radial-wheel/style.css';

function CascadeBehaviourExample() {
    return (
        <HorizontalPageSplit resize={Proportional}>
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
        </HorizontalPageSplit>
    )
}
```

</p>
</details>

### Cascade

A `Cascade` resize cascades across all panels along the axis, starting with the closest panel.

![Cascade resize](images/cascade.gif)

<details>
<summary>Code</summary>
<p>

```tsx
import {
    HorizontalPageSplit,
    Cascade
} from 'react-radial-wheel';
import 'react-radial-wheel/style.css';

function CascadeBehaviourExample() {
    return (
        <HorizontalPageSplit resize={Cascade}>
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
        </HorizontalPageSplit>
    )
}
```

</p>
</details>

### Reverse Cascade

A `ReverseCascade` resize cascades across all panels along the axis, starting with the furthest panel.

![Reverse cascade resize](images/reverse-cascade.gif)

<details>
<summary>Code</summary>
<p>

```tsx
import {
    HorizontalPageSplit,
    ReverseCascade
} from 'react-radial-wheel';
import 'react-radial-wheel/style.css';

function CascadeReverseBehaviourExample() {
    return (
        <HorizontalPageSplit resize={ReverseCascade}>
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
        </HorizontalPageSplit>
    )
}
```

</p>
</details>

### Limit

A `Limit` resize causes a resize to be limited within panels adjacent to the dragged divider.

![Limit resize](images/limit.gif)

<details>
<summary>Code</summary>
<p>

```tsx
import {
    HorizontalPageSplit,
    Limit
} from 'react-radial-wheel';
import 'react-radial-wheel/style.css';

function LimitBehaviourExample() {
    return (
        <HorizontalPageSplit resize={Limit}>
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
        </HorizontalPageSplit>
    )
}
```

</p>
</details>

## Customization

All parts of the library may be customized, either via CSS or via the API.

### Hooks

The [hooks](https://github.com/michaelbull/react-radial-wheel/tree/master/src/hooks)
allow you to apply the necessary styles, classes, and event listeners to any
element.

<details>
<summary><code>useDivider</code></summary>
<p>

```tsx
import {
    DividerProps,
    HorizontalPageSplit,
    useDivider
} from 'react-radial-wheel';
import 'react-radial-wheel/style.css';

function CustomDividerExample() {
    return (
        <HorizontalPageSplit divider={CustomDivider}>
            <div>A</div>
            <div>B</div>
        </HorizontalPageSplit>
    )
}

function CustomDivider(props: DividerProps<HTMLDivElement>) {
    const {
        index,
        ...rest
    } = props;

    const {
        children,
        ...dividerProps
    } = useDivider({
        className: 'custom-divider',
        ...rest
    });

    return (
        <div {...dividerProps}>
            <span>Divider #{index + 1}</span>
            {children}
            <button>My custom button</button>
        </div>
    );
}
```

</p>
</details>

### Components

The [components](https://github.com/michaelbull/react-radial-wheel/tree/master/src/components)
take various props that allow you to embed custom behaviour.

<details>
<summary><code>&lt;HorizontalPageSplit divider={...}&gt;</code></summary>
<p>

```tsx
import {
    HorizontalDivider,
    HorizontalDividerProps,
    HorizontalPageSplit
} from 'react-radial-wheel';
import 'react-radial-wheel/style.css';

function CustomDividerExample() {
    return (
        <HorizontalPageSplit divider={CustomDivider}>
            <div>A</div>
            <div>B</div>
        </HorizontalPageSplit>
    )
}

function CustomDivider(props: HorizontalDividerProps) {
    const {
        index,
        children,
        ...rest
    } = props;

    return (
        <HorizontalDivider className="custom-divider" index={index} {...rest}>
            <span>Divider #{index + 1}</span>
            {children}
            <button>My custom button</button>
        </HorizontalDivider>
    );
}
```

</p>
</details>

## Contributing

Bug reports and pull requests are welcome on [GitHub][github].

## License

This project is available under the terms of the ISC license. See the
[`LICENSE`](LICENSE) file for the copyright information and licensing terms.


[npm]: https://www.npmjs.com/package/react-radial-wheel

[github]: https://github.com/michaelbull/react-radial-wheel

[storybook]: https://michaelbull.github.io/react-radial-wheel/
