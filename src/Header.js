import React from "react";

export class Header extends React.Component{
   
   render(){
    return(
        <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <ul className="nav navbar-nav">
                         
                    <li><a href="">Nume meniu 1</a></li>
                    <li><a href="">Nume meniu 2</a></li>
                </ul>
            </div>
        </div>
    </nav>
    );

    
   } 
}