'use strict'

/**
 *  CustomFooter.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'

import CustomLink from '../CustomLink'

export default () =>
  <footer>
    <ul>
      <li><CustomLink url={'https://x-team.com/blog/'} label={'X-Team Blog'}/></li>
      <li><CustomLink url={'https://docs.spring.io/spring/docs/5.0.0.BUILD-SNAPSHOT/spring-framework-reference/html/web-reactive.html'} label={'WebFlux'}/></li>
      <li><CustomLink url={'https://www.docker.com/'} label={'Docker'}/></li>
      <li><CustomLink url={'https://reactjs.org/'} label={'React'}/></li>
    </ul>
  </footer>