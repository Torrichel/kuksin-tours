import React from 'react'
import { connect } from 'react-redux'
import { findBotUsers } from '../../actions/actions'


export class Tour_Pick extends React.Component {

    constructor(props) {
        super(props);
    }




    render() {


        return (

            <div className="titleSection">
                <h1>Tour Pick</h1>
            </div>


        );
    }



}


export default connect(null)(Tour_Pick);
