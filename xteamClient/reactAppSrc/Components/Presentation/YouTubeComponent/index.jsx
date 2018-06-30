'use strict'

/**
 *  Video Component.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import React from 'react'
import './YouTubeComponent.scss'

export default ({className, url}) =>
  <div className={`${className} youtube`}>
    <iframe width="100%" height="100%" src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullscreen/>
  </div>