'use strict'

/**
 *  Post view for unprotected client resources with Redux.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import CustomFooter from '../../Presentation/CustomFooter'
import './WP.scss'
import { WP_JSON } from '../../../Data'

export class WP extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      wp: WP_JSON,
      ...this.props
    }
  }

  componentDidMount () {
    try {
      /**
       asyncGet(api(null)).then(success => {
        this.setState({
          wp: success || WP_JSON
        })
      })
       */
    } catch (ex) {
      console.log(ex)
    }
  }

  render () {
    const {wp} = this.state
    return (
      <div className="mainContentWrapper">
        <main className="mainTable">
          <table>
            <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
            </thead>

            <tbody>
            <tr>
              <th>NAME</th>
              <th>{wp[0].name}</th>
            </tr>
            <tr>
              <th>DESCRIPTION</th>
              <th>{wp[0].description}</th>
            </tr>
            <tr>
              <th>NAMESPACES</th>
              <th>{wp[0].namespaces}</th>
            </tr>
            </tbody>

          </table>
          <div className="content">
            <div className="text">Have some Lorem Ipsum.</div>
          </div>
          <div className="more">
            <div className="text">I am some super rad filler text!</div>
          </div>
        </main>
        <CustomFooter/>
      </div>
    )
  }
}