'use strict'

/**
 *  Google Maps component.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import { initGMap } from '../../../Helpers/Geo'

export class GoogleMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ...this.props
    }
  }

  componentDidMount () {
    initGMap('gMap')
  }

  render () {
    return (
      <div className="gMap"/>
    )
  }
}
