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
      <li><CustomLink url={'https://wordpress.com/'} label={'WordPress'}/></li>
      <li><CustomLink url={'https://sourceforge.net/projects/xampp/'} label={'Xampp'}/></li>
      <li><CustomLink url={'https://reactjs.org/'} label={'React'}/></li>
    </ul>
  </footer>