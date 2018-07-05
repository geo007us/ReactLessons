import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.state={
            homeLink2:"Continut link din child"
        }
    }
onChangeName(){
    this.props.changeLink(this.state.homeLink2);
    console.log("in child:" , this.state.homeLink2)
}
    render(){
        return(
            <div className="panel panel-default">
            <p> {this.props.homeLink}</p>
    <button className="btn btn-primary" onClick={this.onChangeName.bind(this)}>Change content component</button>
            </div>
        );
    }
}

