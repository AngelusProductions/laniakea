
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import '../css/footer.css'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }
    
    render() {
        return (
            <div id="footerWrapper">
                <div id="footerCopyRight">
                    New England Survey Systems
                    <img id="copyrightSymbol" alt="copyright" src="https://cdn3.iconfinder.com/data/icons/symbol-2-1/36/193-512.png" />
                </div>
            </div>
        )
    }
}


export default withRouter(connect()(Footer))