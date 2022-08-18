import React from "react";
import styles from './IncrementCount.module.css';

class IncrementCount extends React.Component {

    state = { counter: 0 };

    // parece q this.setState usa o atributo acima por baixo dos panos. como se fosse isso:
    // this.setState({this.state.counter: this.state.counter + 1})
    // porem só fuinciona do modo abaixo
    eventoHandle = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return <div className={styles.wrapper}>
            <h4>Contador de eventos</h4>
            <p><label>Eventos acionados: </label><b>{this.state.counter}</b></p>
            <p><button onClick={this.eventoHandle}>Disparar evento</button></p>
        </div>

    }
}

export default IncrementCount;