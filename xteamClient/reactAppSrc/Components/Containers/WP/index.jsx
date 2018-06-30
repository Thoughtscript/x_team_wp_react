'use strict'

/**
 *  WP Container.
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import { connect } from 'react-redux'
import { WP } from './WP'
import { clear, get, remove, safeSave } from '../../../Redux/Shared/DefaultActions'

const mapStateToProps = state => {
  return {
    ...state
  }
}, mapDispatchToProps = dispatch => {
  return {
    save: (key, s) => {
      dispatch(safeSave({data: s, index: key}))
    },
    remove: key => {
      dispatch(remove({index: key}))
    },
    clear: () => {
      dispatch(clear())
    },
    get: key => {
      dispatch(get({index: key}))
    }
  }
}

export const WPContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WP)