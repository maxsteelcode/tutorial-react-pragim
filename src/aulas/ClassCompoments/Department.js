import React from 'react';
import styles from './Dpt.module.css';

class Department extends React.Component {
    render() {
        return <div className={styles.departamento}>
            <h3>Department Details...</h3>
            <p>
                <label>Dpt Name : <b>{this.props.DptName}</b></label>
            </p>
            <p>
                <label>Head Name : <b>{this.props.HeadName}</b></label>
            </p>
        </div>
    }
}

export default Department;