import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

class ClickableDiv extends Component {
  state = {
    clicked: false
  }

  divRef = React.createRef()

  componentDidMount() {
    if (!this.divRef.current) {
      return
    }

    this.divRef.current.addEventListener('mousedown', this.onMouseDown)
    this.divRef.current.addEventListener('mouseup', this.onMouseUp)
  }

  componentWillUnmount() {
    if (!this.divRef.current) {
      return
    }

    this.divRef.current.removeEventListener('mousedown', this.onMouseDown)
    this.divRef.current.removeEventListener('mouseup', this.onMouseUp)
  }

  onMouseDown = () => {
    this.setState({ clicked: true })
  }

  onMouseUp = () => {
    this.setState({ clicked: false })
    this.divRef.current.blur()
  }

  attachRef = (element) => {
    this.divRef.current = element

    const { innerRef } = this.props

    if (!innerRef) {
      return
    }

    if (typeof inputRef === 'function') {
      innerRef(element)
    } else {
      innerRef.current = element
    }
  }

  render() {
    const { className, onClick, children, style, tabIndex } = this.props
    const { clicked } = this.state

    return (
      <div
        className={`${className || ''} ${clicked ? styles.clicked : ''}`}
        style={style}
        role='button'
        tabIndex={tabIndex}
        ref={this.attachRef}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            onClick()
          }
        }}
        onClick={onClick}
      >
        {children}
      </div>
    )
  }
}

ClickableDiv.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape({}),
  children: PropTypes.node,
  innerRef: PropTypes.shape({
    current: PropTypes.shape({})
  }),
  tabIndex: PropTypes.number
}

ClickableDiv.defaultProps = {
  className: null,
  innerRef: null,
  children: null,
  style: {},
  tabIndex: 0
}

export default React.forwardRef((props, ref) => (
  <ClickableDiv innerRef={ref} {...props} />
))
