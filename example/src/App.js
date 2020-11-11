/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'

import ClickableDiv from 'react-clickable-div'
import 'react-clickable-div/dist/index.css'

const App = () => {
  return (
    <>
    <button className="example" onClick={() => alert('Button clicked!')}>
      <strong>Button</strong>
      <br />
      Accessible with keyboard 🔥
      <br />
      Default browser styles 🚫
      <br />
      Outline on click 🚫
    </button>
    <div className="example" onClick={() => alert('Regular div clicked!')}>
      <strong>Regular div</strong>
      <br />
      Not accessible with keyboard 🚫
      <br />
      No outline on click 🔥
    </div>
    <div className="example" role="button" tabIndex={0} onClick={() => alert('Div with role button clicked!')}>
      <strong>Div with role button</strong>
      <br />
      Accessible with keyboard 🔥
      <br />
      Outline on click 🚫
    </div>
    <ClickableDiv className="example" onClick={() => alert('React Clickalbe Div clicked!')}>
      <strong>React clickable div 🔥</strong>
      <br />
      Accessible with keyboard 🔥
      <br />
      No outline on click 🔥
    </ClickableDiv>
    </>
  );
}

export default App
