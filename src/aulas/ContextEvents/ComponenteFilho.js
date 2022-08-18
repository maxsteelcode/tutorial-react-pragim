import React from "react";
import MyContext from "./MyContext";

class ComponenteFilho extends React.Component {

    render() {
        return <>
        <p>
            Componente filho: {this.context.data.Id}
        </p>
            <p>
                <button onClick={this.context.eventChange}>Change</button>
            </p>
        </>
    }

}
ComponenteFilho.contextType = MyContext;
export default ComponenteFilho;