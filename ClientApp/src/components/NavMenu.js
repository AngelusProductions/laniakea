import React from 'react'
import { NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../css/nav-menu.css'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mr-auto index-nav-items">
                <div className="nav-item">
                    <LinkContainer to={'/'} exact>
                        <NavItem>
                            home
                        </NavItem>
                    </LinkContainer>
                </div>
                <div className="nav-item">
                    <LinkContainer to={'/studies'} >
                        <NavItem >
                            studies
                        </NavItem>
                    </LinkContainer>
                </div>
                <div className="nav-item">
                    <LinkContainer to={`users/1`}>
                        <NavItem>
                           profile
                        </NavItem>
                    </LinkContainer>
                </div>
                <div className="nav-item">
                    <LinkContainer to={'/signin'}>
                        <NavItem>
                            settings
                        </NavItem>
                    </LinkContainer>
                </div>
            </div>
        </div>
    </nav>
)
