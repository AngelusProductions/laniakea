import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../css/nav-menu.css'

class NavMenu extends Component {
    constructor(props) {
        super(props)
        this.state = { selected: 1 } 
    }

    componentDidMount() {
        const urls = {
            '/': 1,
            '/studies': 2,
            '/search': 3,
            '/account': 4
        }
        Object.keys(urls).forEach( url => {
            if (url === this.props.location.pathname) {
                this.setState({ selected: urls[url]})
            }
        })
    }

    onLinkClick(e) { this.setState({ selected: parseInt(e.target.id, 0) }) }

    render() {
        const urls = {
            'home': '/',
            'studies': '/studies',
            'search': '/search',
            'account': '/account'
        }

        let i = 0
        const titles = Object.keys(urls)
        const navbar = titles.map( link => {
            const title = Object.keys(urls)[i]
            const url = urls[title]
            const cssClass = this.state.selected === i + 1
                ? 'navbar-link selected'
                : 'navbar-link'
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
        return (<ul id="navbarList">{navbar}</ul>)
    }
}

export default withRouter(connect()(NavMenu))