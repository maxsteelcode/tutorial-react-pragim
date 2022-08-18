import React from "react";
import styles from '../IntroToState/IncrementCount.module.css'

class ComponenteFilho1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valor: 0
        };
    }

    eventoQueAlteraAVariavel = () => {
        this.props.eventoCallBack(this.state.valor);// este evento será passado para o pai e precisa ter mesmo parametros
    }

    render() {
        return <div  className={styles.wrapper}> 
            <p>
                <label>Valor a ser alterado: 
                    <input type="text"
                    defaultValue={this.state.valor}
                    onChange={(e) => this.setState({ valor: parseInt(e.target.value) })} /></label>
            </p>
            <p>
                <button onClick={this.eventoQueAlteraAVariavel}>Alterar valor</button>
            </p>
        </div>
    }

}

export default ComponenteFilho1;