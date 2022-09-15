import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmpRetrieve = () => {
  const [empList, setEmpList] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "/emp/emplist.do",
    })
      .then((res) => {
        setEmpList(res.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  const thStyle = {
    fontWeight: "bold",
    color: "white",
    padding: 20,
    backgroundColor: "black",
    height: "5em",
    textAlign: "center",
  };
  function convertDate(longValue) {
    return new Date(longValue).toLocaleString();
  }

  return (
    <div>
      <h1>직원조회</h1>
      <table>
        <thead>
          <tr style={thStyle}>
            <th>직원번호</th>
            <th>firstName</th>
            <th>급여</th>
            <th>입사일</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((emp, index) => (
            <tr key={index}>
              <td>
                <Link
                  to={`/emp/empdetail/${emp.employee_id}`}
                  style={{ color: "blue" }}
                >
                  {emp.employee_id}
                </Link>
              </td>
              <td>{emp.first_name}</td>
              <td>{emp.salary}</td>
              <td>{convertDate(emp.hire_date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpRetrieve;
