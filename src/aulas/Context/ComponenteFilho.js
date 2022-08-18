import React from "react";
import { ContextId } from "./ContextId";

class ComponenteFilho extends React.Component {

    // tbm funciona desta forma
    //static contextType = ContextId; 

    render() {
        return <div>
            <h3>Componente filho</h3>
            <p>O id está definido no state do componente pai e é passado para os filhos através do context.</p>
            <label>ID: <b>{this.context}</b></label>
        </div>
    }
}

ComponenteFilho.contextType = ContextId;
export default ComponenteFilho;