import { useEffect, useState } from "react";
import { departments, branches } from "./Data";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./FillUpForm.css"

const FillUpForm = ({ url, isUpdate }) => {
  const [employeeId, setEmployeeId] = useState(0);
  const [employeeFullName, setEmployeeFullName] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeDepartment, setEmployeeDepartment] = useState("");
  const [employeeBranch, setEmployeeBranch] = useState("");
  const { id } = useParams();
  const pageNavigate = useNavigate();

  useEffect(() => {
    if (isUpdate) getRecord();
  }, [isUpdate]);

  function backHomePage() {
    pageNavigate("/");
  }

  async function postEmployeeRecord() {


    fetch(url + "/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id : employeeId,
        fullName: employeeFullName,
        email: employeeEmail,
        departmentName: employeeDepartment,
        branchName: employeeBranch,
      }),
    });

    backHomePage();
  }

  async function updateRecord() {
    fetch(url + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: employeeId,
        fullName: employeeFullName,
        email: employeeEmail,
        departmentName: employeeDepartment,
        branchName: employeeBranch,
      }),
    });

    backHomePage();
  }

  async function getRecord() {
    fetch(`${url}/${id}`)
      .then((response) => response.json())
      .then((record) => {
        setEmployeeId(record.id);
        setEmployeeFullName(record.fullName);
        setEmployeeEmail(record.email);
        setEmployeeDepartment(record.departmentName);
        setEmployeeBranch(record.branchName);
      })
      .catch((error) => console.error(error.message));
  }

  return (
    <div id="FillUpForm">
      <div className="Headers">
        <Link to={"/"} className="Home">
          <h1>Employee Management System</h1>
        </Link>
      </div>
      <div className="Form">
        <div className="Label">
          <label htmlFor="emp_id">Employee ID </label>
          <input
            value={employeeId}
            type="text"
            name="emp_id"
            id="emp_id"
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <div className="Label">
          <label htmlFor="fullName">Full Name </label>
          <input
            value={employeeFullName}
            type="text"
            name="fullName"
            id="fullName"
            onChange={(e) => setEmployeeFullName(e.target.value)}
          />
        </div>
        <div className="Label">
          <label htmlFor="email">Email </label>
          <input
            value={employeeEmail}
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmployeeEmail(e.target.value)}
          />
        </div>
        <div className="Label">
          <label htmlFor="departmentName">Department</label>
          <select
            value={employeeDepartment}
            onChange={(e) => setEmployeeDepartment(e.target.value)}
          >
            {departments.map((department, key) => (
              <option value={department} key={key}>
                {department}
              </option>
            ))}
          </select>
        </div>
        <div className="Label">
          <label htmlFor="branchName">Branch</label>
          <select
            value={employeeBranch}
            onChange={(e) => setEmployeeBranch(e.target.value)}
          >
            {branches.map((branch, key) => (
              <option value={branch} key={key}>
                {branch}
              </option>
            ))}
          </select>
        </div>
        <div className="buttons">
          {isUpdate ? (
            <button type="submit" onClick={() => updateRecord()}>
              Update
            </button>
          ) : (
            <button type="submit" onClick={() => postEmployeeRecord()}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FillUpForm;
