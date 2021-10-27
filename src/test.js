import { Component } from "react";
import './App.css';


export function FunctionComponent() {
    return(
        <div className="func">
                <h1 className="cheading">This is created using functional Component</h1>
                <p className="cpara">This is done using external CSS</p>
                <p className="cpara" style={{color: "blue"}}>This is done using inline CSS</p>
        </div>
    )
}



export class ClassComponent extends Component{
    render(){
        return(
            <div className="clas">
                <h1 className="cheading">This is created using class Component</h1>
                <p className="cpara">This is done using external CSS</p>
                <p className="cpara" style={{color: "blue"}}>This is done using inline CSS</p>
            </div>
        )
    }
}
