import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import NavMenu from './NavMenu'
import '../css/global.css'

export default props => (
    <Grid fluid className="normalize">
        <Row className="normalize">
            <Col sm={12} className="normalize">
                <Row className="justify-content-center">
                    <Col>
                        <NavMenu />
                    </Col>
                </Row>
                <Row className="justify-content-center content normalize">
                    <Col className="justify-content-left normalize">
                        {props.children}
                    </Col>
                </Row>
            </Col>
        </Row>
    </Grid>
)
