'use strict'

/**
 *  Xhr POST Helpers.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import { errMsg, restListener } from './Shared'

export const asyncDataPost = (url, data, token) => {
  return new Promise((res, rej) => {
    const what = 'asyncDataPost'
    try {
      let r = restListener(res, rej, what, 'success', 'fail')
      r.open('POST', url, true)
      r.setRequestHeader('Content-type', 'application/json')
      r.setRequestHeader('Access-Control-Allow-Headers', '*')
      r.withCredentials = true
      if (token !== null) r.setRequestHeader('Authorization', 'bearer ' + token)
      r.send(data)
    } catch (ex) {
      console.log(errMsg(what, ex))
    }
  })
}

export const asyncParamsPost = (url, params, token) => {
  return new Promise((res, rej) => {
    const what = 'asyncParamsPost'
    try {
      let r = restListener(res, rej, what, 'success', 'fail')
      r.open('POST', url, true)
      r.setRequestHeader("Content-type", "application/json");
      r.setRequestHeader('Access-Control-Allow-Headers', '*')
      r.withCredentials = true
      if (token !== null) r.setRequestHeader('Authorization', 'bearer ' + token)
      for (let i = 0; i < Object.keys(params).length; i++) {
        if (i === 0) url += `?`
        url += `${Object.keys(params)[i]}=${params[Object.keys(params)[i]]}`
        if (i < Object.keys(params).length - 1) url += `&`
      }
      r.send()
    } catch (ex) {
      console.log(errMsg(what, ex))
    }
  })
}