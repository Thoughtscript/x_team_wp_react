'use strict'

/**
 *  Constants - clientside config. Publicly exposed!
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

//React Client Routes
export const
  BASE_PATH = '/',
  HOME_PATH = '/home',
  JSON_PATH = '/json',
  PAGE_PATH = '/page',
  POST_PATH = '/post'

//WebFlux Endpoints
export const
  API_PROTOCOL = 'https',
  API_BASE_URL = 'localhost:443/wordpress/wp-json/',
  API_POSTS = 'wp/v2/posts',
  API_PAGES = 'wp/v2/pages'

export const api = suffix => (suffix !== '' && suffix !== null) ? `${API_PROTOCOL}://${API_BASE_URL}${suffix}` : `${API_PROTOCOL}://${API_BASE_URL}`
