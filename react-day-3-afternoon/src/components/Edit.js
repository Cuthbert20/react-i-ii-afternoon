import React, {Component} from 'react'

export default class Edit extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render(){
        return(
            <button className="edit-btn" onClick={this.props.edit} >Edit</button>
        )
    }
}