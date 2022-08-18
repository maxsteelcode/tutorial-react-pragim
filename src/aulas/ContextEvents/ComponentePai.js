import React from "react";
import MyContext from "./MyContext";
import Documentacao from "../../layout/Documentacao";
import ComponenteFilho from "./ComponenteFilho";

class ComponentePai extends React.Component {

    constructor(props) {
        super(props);

        // sempre passamos por state o context para os filhos
        // não podemos ter conflitos de context e state da propria classe, acho q considera somente do context
        this.state = {
            data: { Id: 0 },
            eventChange: this.evento
        }

    }

    evento = () => {
        this.setState({ data: { Id: this.state.data.Id + 1 } })
    }

    render() {
        return <>

            <Documentacao
                titulo={"Context - Events"}
                subtitulo={"Como passar eventos em context para q filhos possam acionar eventos no pai"}
                descricao={"It is often necessary to update the context from a component that is nested somewhere deeply in the component tree. In this article, we will understand how do we Update Context from a Nested Component and how to handle that Update event in the Parent component."} />
            <p>
                <a href="https://www.pragimtech.com/blog/reactjs/component-communication-using-context-part-2/" rel="noreferrer" target="_blank">Pragim tutorial</a>
            </p>

            <p>
                Id componente pai: {this.state.data.Id}
            </p>

            <MyContext.Provider value={this.state} >
                <ComponenteFilho />
            </MyContext.Provider>

        </>
    }

}

export default ComponentePai;