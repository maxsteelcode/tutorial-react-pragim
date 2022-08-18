import React from "react";

class EmployeeDetails extends React.Component {

    employeeDetails = this.props.data;

    render() {
        return (<ul>
            <li>
                <label>Id: {this.employeeDetails.Id} </label>
            </li>
            <li>
                <label>Name: {this.employeeDetails.Name} </label>
            </li>
            <li>
                <label>Location: {this.employeeDetails.Location} </label>
            </li>
            <li>
                <label>Salary: {this.employeeDetails.Salary} </label>
            </li>
        </ul>)
    }

}

export default EmployeeDetails;