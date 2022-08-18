
import styles from './Documentacao.module.css';

function Documentacao({ titulo, subtitulo, descricao }) {

    return (
        <div className={styles.documentacao}>
            <h2>{titulo}</h2>

            <h4>{subtitulo}</h4>

            <p>{descricao}</p>
        </div>
    )

}

export default Documentacao;