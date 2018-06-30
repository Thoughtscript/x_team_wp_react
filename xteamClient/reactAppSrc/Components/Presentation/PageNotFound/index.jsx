'use strict'

/**
 *  Page Not Found Landing page.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import './PageNotFound.scss'
import CustomFooter from '../CustomFooter'
import YouTubeComponent from '../YouTubeComponent'

export class PageNotFound extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ...this.props
    }
  }
  componentDidMount () { }

  render () {
    return (
      <div className="mainContentWrapper">
        <main className="notFoundPage">
          <div className="hero"/>
          <div className="content">
            <div className="text">
              404. Whoops! You landed on the wrong page (But hey... check out the sweet video below)!
            </div>
          </div>
          <YouTubeComponent className="more" url={"https://www.youtube.com/embed/wQk7-UftGQc"}/>
        </main>
        <CustomFooter/>
      </div>)
  }
}