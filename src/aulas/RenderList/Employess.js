
import React from "react";
import EmployeeList from "./EmployeeList";
import EmployeeDetails from "./EmployeeDetails";
import Documentacao from "../../layout/Documentacao";
import styles from '../../layout/ComponentePai.module.css';

class Employess extends React.Component {

    employeeList = EmployeeList.map((emp) =>
        <EmployeeDetails key={emp.Id} data={emp} />
    );

    render() {

        return (<div>

            <Documentacao
                titulo="Iteration To List"
                subtitulo="It is often necessary to fetch a List of Objects like either List of Employees or List of Products or List of Posts from the Data Store and display them in our Application"
                descricao="https://www.pragimtech.com/blog/reactjs/iterate-list-in-react/"
            />
            <div className={styles.wrapper}>
                {this.employeeList}
            </div>
        </div>)

    }

}

export default Employess;