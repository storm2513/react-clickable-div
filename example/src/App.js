import React from 'react'

import ClickableDiv from 'react-clickable-div'
import 'react-clickable-div/dist/index.css'

const App = () => {
  return (
    <>
    <div className="example" onClick={() => alert('Clicked!')}>
      Regular div
      <br />
      Not accessible with keyboard :(
    </div>
    <ClickableDiv className="example" onClick={() => alert('Clicked!')}>
      React clickable div
      <br />
      Accessible with keyboard :)
    </ClickableDiv>
    </>
  );
}

export default App
