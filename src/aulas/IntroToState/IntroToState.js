import React from "react";
import Documentacao from '../../layout/Documentacao';
import IncrementCount from "./IncrementCount";
import CountCaracteres from "./CountCaracteres";

class IntroToState extends React.Component {

    render() {
        return <>

            <Documentacao
                titulo="Introduction to state"
                subtitulo="Com state podemos manter o estado de uma variável em toda a classe e renderizada conforme seu estado mude."
                descricao="Abaixo temos dois exemplos. No primeiro, temos uma variável count mantida pelo state. Conforme clicamos no botão, a variável count é incrementada. No segundo exemplo temos um contador de caracteres. Neste exemplo a variável é setada já dentro do state e no constructor." />

            <IncrementCount/>

            <CountCaracteres/>
        </>
    }

}

export default IntroToState;