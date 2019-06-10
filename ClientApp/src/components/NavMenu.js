import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../css/nav-menu.css'

class NavMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 1
        } 
    }

    componentWillMount() {
        const urls = {
            "/": 1,
            "/studies": 2,
            "/users/1": 3,
            "/signin": 4
        }
        Object.keys(urls).forEach( url => {
            if (url === this.props.location.pathname) {
                this.setState({ selected: urls[url]})
            }
        })
    }

    onLinkClick(e) { this.setState({ selected: parseInt(e.target.id) }) }

    render() {
        const links = {
            "home": "/",
            "studies": "/studies",
            "profile": "/users/1",
            "account": "/signin"
        }

        let i = 0
        const titles = Object.keys(links)
        const navbar = titles.map( link => {
            const title = Object.keys(links)[i]
            const url = links[title]
            const cssClass = this.state.selected === i + 1
                ? "navbar-link selected"
                : "navbar-link"
            i++
            return (
                <Link to={url} key={i}>
                    <li id={i}
                        className={cssClass}
                        onClick={this.onLinkClick.bind(this)}>
                        {title}
                    </li>
                </Link>
                )
        })
        return (
            <ul id="navbarList">
                {navbar}
            </ul>
        )
    }
}

export default withRouter(connect()(NavMenu))