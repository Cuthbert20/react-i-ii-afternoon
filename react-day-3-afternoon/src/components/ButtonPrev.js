import React, {Component} from 'react'

export default class ButtonPrev extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render(){
        return(
            <button onClick={this.props.previous} ></button>
        )
    }
}