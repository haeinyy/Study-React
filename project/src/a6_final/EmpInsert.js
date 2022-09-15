import Axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpInsert = () => {
  const [emp, setEmp] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e);
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios({
      method: "post",
      url: "/emp/empInsert.do",
      data: emp,
    })
      .then((res) => {
        alert(` 성공적으로 입력 되었습니다.`);
        navigate("/emp/emplist");
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
  return (
    <div>
      <h1>직원 신규등록</h1>
      <form id="empfrm" onSubmit={handleSubmit} className="container">
        <div className="form-group">
          <label>직원번호</label>
          <input
            className="form-control"
            type="number"
            name="employee_id"
            id="employee_id"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>first name</label>
          <input
            className="form-control"
            type="text"
            name="first_name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>last name</label>
          <input
            className="form-control"
            type="text"
            name="last_name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>이메일</label>
          <input
            className="form-control"
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>전화번호</label>
          <input
            className="form-control"
            type="text"
            name="phone_number"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>커미션</label>
          <input
            className="form-control"
            type="text"
            name="commission_pct"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>메니져</label>
          <input
            type="number"
            name="manager_id"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>부서</label>
          <input
            type="number"
            name="department_id"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>직책</label>
          <input
            type="text"
            name="job_id"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>급여</label>
          <input
            className="form-control"
            type="text"
            name="salary"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>입사일</label>
          <input
            className="form-control"
            type="date"
            name="hire_date"
            onChange={handleChange}
          />
        </div>
        <input className="btn btn-primary" type="submit" value="입력하기" />
        <input className="btn btn-secondary" type="reset" value="취소하기" />
        <Link to="/emp/emplist">
          <button className="btn btn-primary">직원조회</button>
        </Link>
      </form>
    </div>
  ); //return end
}; //function end
export default EmpInsert;
