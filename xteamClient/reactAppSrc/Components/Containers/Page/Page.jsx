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
import { asyncGet } from '../../../Helpers/Xhr/Get'
import { api, API_PAGES } from '../../../Constants'

export class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      ...this.props
    }
  }

  componentDidMount () {
    try {

      asyncGet(api(API_PAGES)).then(success => {
        this.setState({
          users: success || []
        })
      })

    } catch (ex) {
      console.log(ex)
    }
  }

  render () {
    const {users} = this.state
    return (
      <div className="mainContentWrapper">
        <main className="mainTable">
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {
              checkArray(users) && (users).map(user =>
                <tr>
                  <th>{user.name}</th>
                  <th>{user.email.address}</th>
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