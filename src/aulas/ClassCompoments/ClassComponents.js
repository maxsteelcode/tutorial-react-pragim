
import React from 'react';
import Department from './Department';
import Documentacao from '../../layout/Documentacao';
import styles from './Employee.module.css';

class Employee extends React.Component {

   render() {
      return <>

         <Documentacao
            titulo="Class components"
            subtitulo="Estrutura básica de um class component e como uma classe pode ser utilizada por outra."
            descricao="No exemplo abaixo temos uma classe Employee utilizando a classe Department. aulas >> ClassComponents" />

         <div className={styles.employee}>
            <h3>Employee Details</h3>
            <p>
               <label>Employee ID:  <b>{this.props.Id}</b></label>
            </p>
            <p>
               <label>Employee Name:  <b>{this.props.Name}</b></label>
            </p>
            <p>
               <label>Employee Location:  <b>{this.props.Location}</b></label>
            </p>
            <p>
               <label>Employee Salary:  <b>{this.props.Salary}</b></label>
            </p>
            <Department DptName={this.props.DptName} HeadName={this.props.HeadName} />
         </div>

      </>
   }

}

export default Employee;