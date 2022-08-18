import React from "react";
import styles from '../IntroToState/IncrementCount.module.css'
import ComponenteFilho1 from './ComponenteFilho1';
import Documentacao from "../../layout/Documentacao";

class ComponentePai extends React.Component {

    state = { variavelQueSeraModificada: 0 };

    eventoParaOsFilhosAtualizaremElementoPai = (valor) => {
        this.setState({ variavelQueSeraModificada: valor });
    }

    render() {
        return <>

            <Documentacao
                titulo="Interações entre componentes - envio de callback"
                subtitulo="Quando precisamos que o componente filho comunique o elemento pai através de um callback"
                descricao="Ao alterar o valor do elemento filho e salvar, o valor do elemento pai será alterado, O Elemento pai passa o método que o elemento filho deverá chamar através de uma prop." />

            <div className={styles.wrapper}>
                <h4>Variável que será alterada pelos filhos e que precisa refletir no pai</h4>
                <p><label>Valor: </label><b>{this.state.variavelQueSeraModificada}</b></p>                
            </div>

            <ComponenteFilho1 eventoCallBack={this.eventoParaOsFilhosAtualizaremElementoPai}/>   

        </>
    }
}

export default ComponentePai;