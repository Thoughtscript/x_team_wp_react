'use strict'

/**
 *  Post view for unprotected client resources with Redux.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import CustomFooter from '../../Presentation/CustomFooter'
import './Page.scss'
import { checkArray } from '../../../Helpers/Generic'
import { PAGES_DATA } from '../../../Data'

export class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pages: PAGES_DATA,
      ...this.props
    }
  }

  componentDidMount () {
    try {
      /**
      asyncGet(api(API_PAGES)).then(success => {
        this.setState({
          pages: success || PAGES_DATA
        })
      })
       */
    } catch (ex) {
      console.log(ex)
    }
  }

  render () {
    const {pages} = this.state
    return (
      <div className="mainContentWrapper">
        <main className="mainTable">
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {
              (pages).map(p =>
                <tr>
                  <th>{p.title.rendered}</th>
                  <th>{p.date}</th>
                </tr>
              )
            }
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