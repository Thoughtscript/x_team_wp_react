'use strict'

/**
 *  Router.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CustomHeader from '../Presentation/CustomHeader'

import { JSON_PATH, BASE_PATH, HOME_PATH, PAGE_PATH, POST_PATH } from '../../Constants'

import { Landing } from '../Presentation/Landing'
import { PostContainer } from '../Containers/Post'
import { PageContainer } from '../Containers/Page'
import { WPContainer } from '../Containers/WP'
import { PageNotFound } from '../Presentation/PageNotFound'

export default () =>
  <BrowserRouter>
    <div className="innerRouterWrapper">
      <CustomHeader/>
      <Switch>
        <Route exact path={BASE_PATH} component={Landing}/>
        <Route exact path={HOME_PATH} component={Landing}/>
        <Route exact path={JSON_PATH} component={WPContainer}/>
        <Route exact path={PAGE_PATH} component={PageContainer}/>
        <Route exact path={POST_PATH} component={PostContainer}/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  </BrowserRouter>