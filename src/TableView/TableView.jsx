import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TableView.css";
import FillUpForm from "../FillUpForm/FillUpForm";

const TableView = ({ url }) => {
  const [employeesRecords, setEmployeesRecords] = useState([]);
  let navigate = useNavigate();  

  async function deleteRecords(id) {

    setEmployeesRecords((records) => {
        let newrecords = records.filter((record) => record.id != id)
        return newrecords;
    })

    let response = await fetch(url + '/' + id,{
        method : "DELETE",
        credentials : "include"
    })

    let result = await response.json();

    console.log(result.message);
    
  }
  async function getAllRecords() {
    let response = await fetch(url + "/");
    let records = await response.json();

      console.log(records);
      setEmployeesRecords(records);
  }


  useEffect(() => {
    getAllRecords();
  },[]);

  useEffect(() => {
    getAllRecords();
  },[url])

  return (
    <div className="TableView">
      <table>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Branch</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {employeesRecords.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.fullName}</td>
                <td>{employee.email}</td>
                <td>{employee.departmentName}</td>
                <td>{employee.branchName}</td>
                <td className="edit">
                  <button className="update" onClick={() => navigate("/update/"+employee.id)} >
                    update
                    </button>
                  <button className="delete" onClick={() => {
                    deleteRecords(employee.id);
                }}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
