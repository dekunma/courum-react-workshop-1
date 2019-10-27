import React from 'react'
import '../CSS/style.css'
class Button extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(<div>
            <button className="btn" onClick={this.props.onClick}>{this.props.text}</button>
        </div>)
    }
}

export default Button