
import React from "react";
import styles from './IncrementCount.module.css';

class CountCaracteres extends React.Component{

    // tbm funcionaria assim e retirando do constructor
    /*state={
        count: 0
    };*/

    constructor(props){
        super(props);       
        this.state={
            count: 0
        };
    }



    DigitarTexto(text){
        this.setState({count: text.length})
    }

    render(){        
        return <div className={styles.wrapper}>
            <h4>Contador de caracteres</h4>
            <p><label>Digite o texto: </label> <input type="text" onChange={e=> this.DigitarTexto(e.target.value)}/></p>
            <p><label>Quantidade de caracteres: </label><b>{this.state.count}</b></p>            
        </div>        
    }
}

export default CountCaracteres;