import React from "react";

export default class IncrButton extends React.Component{
    constructor(props){
        super(props);
        
        this.state ={
            count:0
        }
    }

    render(){
        return (
            <button className="btn btn-primary" onClick={
                event => this.setState({
                    count: this.state.count + 1
                }
                )}>
                click here please {this.state.count}
            </button>
        )
    }
}