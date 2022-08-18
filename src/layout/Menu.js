import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="ClassComponent">5. Class components</Link>
                </li>
                <li className={styles.item}>
                    <Link to="IntroToState">6. Introduction do state</Link>
                </li>
                <li className={styles.item}>
                    <Link to="EventCallback">7. Interaction components - event callback</Link>
                </li>
                <li className={styles.item}>
                    <Link to="Context">8. Context</Link>
                </li>
                <li className={styles.item}>                    
                    <Link to="ContextEvento">9. Context Event</Link>
                </li>
                <li className={styles.item}>
                    <Link to="IterationList">10. Iteration List</Link>
                </li>
                <li className={styles.item}>
                    <Link to="ConsumingAPI">11. Consuming API</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;