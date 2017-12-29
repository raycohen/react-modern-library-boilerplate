/**
 * @class ExampleComponent
 */

import React, { Component } from 'react'

import './styles.css'

export default class ExampleComponent extends Component {
  render() {
    const {
      text
    } = this.props

    return (
      <div className='test'>
        Example Component: {text}
      </div>
    )
  }
}
