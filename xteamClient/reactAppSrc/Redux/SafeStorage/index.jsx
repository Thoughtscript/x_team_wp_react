'use strict'

/**
 *  Encapsulated state storage Reducer.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import { CLEAR, GET, REMOVE, SAFE_SAVE } from '../Shared/DefaultActions'

let encapsulatedStateObj = {}

const set = (index, data) => {
  encapsulatedStateObj[index] = data
  return Object.assign({}, encapsulatedStateObj)
}, remove = index => {
  delete encapsulatedStateObj[index]
  return Object.assign({}, encapsulatedStateObj)
}, clear = () => {
  for (let i = 0; i < Object.getKeys(encapsulatedStateObj).length; i++) {
    remove(Object.getKeys(encapsulatedStateObj)[i])
  }
  return Object.assign({}, encapsulatedStateObj)
}

/**
 * Default supplied reducer.
 *
 * Caches into state.
 *
 * Partition by key in state.
 *
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */

export const SafeStorage = (state = encapsulatedStateObj, action) => {
  const type = action['type']
  switch (type) {
    case SAFE_SAVE:
      return set(action['v']['index'], action['v']['data'])
    case REMOVE:
      return remove(action['v']['index'])
    case GET:
      return Object.assign({}, encapsulatedStateObj[action['v']['index']])
    case CLEAR:
      return clear()
    default:
      return state
  }
}
