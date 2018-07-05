import React from "react";

export class Produse extends React.Component{

    render(){
        return(
            <div>
                
                <ul>
                    {this.props.servicii.lista.map ((items, i) => <li key={i}><h3>{this.props.servicii.numeServiciu} {i+1}</h3> - {items}<br /> {this.props.children}</li>)}
                </ul>
                 
            </div>
        );
    }
}

export default Produse;