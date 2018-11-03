/**
 * Toggle component in render prop design pattern
 */

import React from 'react'

export default class Toggle extends React.Component {

  state = {
    on: false
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
  
  render() {
    let { children } = this.props;
    return (
      children({
        on: this.state.on,
        toggle: this.toggle
      })
    )
  }
}