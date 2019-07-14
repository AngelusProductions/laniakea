import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//import { stack as Menu } from 'react-burger-menu'

import '../css/hamburger.css'

class Hamburger extends Component {
    constructor(props) {
        super(props)
        this.state = { isActive: false }
    }

    onHamburgerClick (e) { this.setState({ isActive: !this.state.isActive }) }

    render() {
        const activeClass = this.state.isActive ? ' is-active' : ''
        return(
                <button
                    onClick={this.onHamburgerClick.bind(this)} className={"hamburger hamburger--spin-r" + activeClass} type="button">
                    <span className="hamburger-box"><span id="hamburgerId" className="hamburger-inner"></span></span>
                </button>
        )
    }
}

export default withRouter(connect()(Hamburger))