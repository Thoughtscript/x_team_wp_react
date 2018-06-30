'use strict'

/**
 *  Navigation Menu.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import { Link } from 'react-router-dom'

import { JSON_PATH, BASE_PATH, HOME_PATH, PAGE_PATH, POST_PATH } from '../../Constants'

export class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ...this.props
    }
  }

  render () {
    const w = window.location.pathname

    return (
      <nav>
        <ul>
          <li className="home">
            <Link className={(w === BASE_PATH || w === HOME_PATH) ? 'active' : 'inactive'} to={BASE_PATH}>Home</Link>
          </li>
          <li>
            <Link className={w === JSON_PATH ? 'active' : 'inactive'} to={JSON_PATH}>WP-JSON</Link>
          </li>
          <li>
            <Link className={w === PAGE_PATH ? 'active' : 'inactive'} to={PAGE_PATH}>Page</Link>
          </li>
          <li>
            <Link className={w === POST_PATH ? 'active' : 'inactive'} to={POST_PATH}>Post</Link>
          </li>
        </ul>
      </nav>
    )
  }
}