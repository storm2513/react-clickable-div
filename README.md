# react-clickable-div

> Painless adding accessibility to you div elements

[![NPM](https://img.shields.io/npm/v/react-clickable-div.svg)](https://www.npmjs.com/package/react-clickable-div) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-clickable-div
```

## Usage

```jsx
import React, { Component } from 'react'

import ClickableDiv from 'react-clickable-div'
import 'react-clickable-div/dist/index.css'

class Example extends Component {
  render() {
    return (
      <ClickableDiv className="my-awesome-div" onClick={() => { console.log('CLICKED'); }}>
        I am a clickable div!
      </ClickableDiv>
    )
  }
}
```

## License

MIT © [storm2513](https://github.com/storm2513)
