import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setName } from './store/actions/ui_actions'

function Layout(props) {
  const { dispatchSetName } = props

  return <h1>index.js</h1>
}

const mapStateToProps = state => {
  return { some: 'haha' }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchSetName: name => dispatch(setName(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
