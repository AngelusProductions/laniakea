import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import NavMenu from './NavMenu'
import '../css/global.css'

export default props => (
    <Grid fluid>
        <Row>
            <Col sm={12}>
                <Row className="justify-content-center" id="navbarRow">
                    <Col>
                        <NavMenu />
                    </Col>
                </Row>
                <Row className="justify-content-center content">
                    <Col className="justify-content-left">
                        {props.children}
                    </Col>
                </Row>
            </Col>
        </Row>
    </Grid>
)
