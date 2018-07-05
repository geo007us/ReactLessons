import React from "react";
import Produse from "./components/Produse" ;
export class About extends React.Component{

    render(){
        var servicii={
            numeServiciu:"Servicii",
            lista:["Stingatoare", "Tipografie", "Printare"]
        }
           return(
            <div className="container">
            <p>Continut about component</p>
            <Produse servicii={servicii}>
            {/* //cand este scris tag ul de forma asta intre cele doua sunt copii si sunt accesati this.props.children */}
            <button className="btn btn-default">Adauga</button>
            <button className="btn btn-default">Cumpara</button>
          
            </Produse>
           
            </div>
        );
    }
}

