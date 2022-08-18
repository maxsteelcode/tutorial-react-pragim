import React from "react";
import styles from '../IntroToState/IncrementCount.module.css'
import Documentacao from "../../layout/Documentacao";
import { ContextId } from "./ContextId";
import ComponenteFilho from "./ComponenteFilho";

class ComponentePai extends React.Component {

    constructor(props) {
        super(props);
        this.state = { id: 0 };
    }

    changeEmpData = () => {
        this.setState({ id: this.state.id + 1 } );
    }

    render() {
        return <>
            <Documentacao
                titulo="Comunicação entre componentes com Context"
                subtitulo="Context disponibiliza uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível."
                descricao="Em uma aplicação típica do React, os dados são passados de cima para baixo (de pai para filho) via props, mas esse uso pode ser complicado para certos tipos de props (como preferências locais ou tema de UI), que são utilizadas por muitos componentes dentro da aplicação. Contexto (context) fornece a forma de compartilhar dados como esses, entre todos componentes da mesma árvore de componentes, sem precisar passar explicitamente props entre cada nível." />

            <p><a href="https://pt-br.reactjs.org/docs/context.html" target="_blanck">Documentação do React</a></p>
            <div className={styles.wrapper}>
                <h4>Variável que será alterada e refletida automaticamente nos filhos</h4>
                <p><label>Valor: </label><b>{this.state.id}</b></p>
                <button onClick={this.changeEmpData}>Incrementar ID</button>
            </div>

            <ContextId.Provider value={this.state.id}>
                <ComponenteFilho/>
            </ContextId.Provider>
        </>
    }

}

export default ComponentePai;