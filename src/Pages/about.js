import React, { Component } from 'react';
import {useLocation} from 'react-router-dom'
import queryString from 'query-string';
class About extends Component {
    constructor(props){

        super(props);

    }
    render() {

        const {match} = this.props;
        console.log(match)
        console.log(this.props)

        console.log(queryString.parse(this.props.location.search).token)
        return (
            <div>
            <h1>I am about</h1>
                
            </div>
        );
    }
}

export default About;