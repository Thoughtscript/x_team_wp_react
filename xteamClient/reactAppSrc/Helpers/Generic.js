'use strict'

/**
 *  Generic Helpers.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

export const redirect = (history, url) => history.push(url)

export const checkString = val => val !== undefined && val !== null && val !== '' && val.length > 0

export const checkArray = val => val !== undefined && val !== null && val.length > 0 && typeof val === Array

export const checkObj = val => val !== undefined && val !== null

export const paramFromUrlString = (urlString, regex) => urlString.match(regex)