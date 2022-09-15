import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const EmpUpdate = () => {
  const location = useLocation();
  const originalEmp = location.state.emp;
  const [emp, setEmp] = useState(originalEmp);
  let navigate2 = useNavigate();
  const handleChange = (e) => {
    console.log(e);
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };
  function convertDate(longValue) {
    return new Date(longValue).toJSON().split("T")[0];
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: "/emp/empUpdate.do",
      data: emp,
    }).then((res) => {
        alert(`변경사항이 성공적으로 저장되었습니다.`);
        navigate2("/emp/emplist");
      }).catch((error) => {
        throw new Error(error);
      });
  };
  const thStyle = {
    fontWeight: "bold",
    padding: 20,
    backgroundColor: "lightgray",
    color: "black",
  };
  return (
    <>
      <div className="container">
        <h2 align="center" style={thStyle}>
          emp 상세정보(수정)
        </h2>
        <form id="empfrm" onSubmit={handleSubmit}>
          <div>
            <label>직원번호</label>
            <input
              className="form-control "
              type="number"
              name="employee_id"
              id="employee_id"
              onChange={handleChange}
              value={emp.employee_id}
            />
          </div>
          <div>
            <label>first name</label>
            <input
              className="form-control "
              type="text"
              name="first_name"
              onChange={handleChange}
              value={emp.first_name}
            />
          </div>
          <div>
            <label>last name</label>
            <input
              className="form-control "
              type="text"
              name="last_name"
              onChange={handleChange}
              value={emp.last_name}
            />
          </div>
          <div>
            <label>이메일</label>
            <input
              className="form-control  "
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              value={emp.email}
            />
          </div>
          <div>
            <label>전화번호</label>
            <input
              className="form-control  "
              type="text"
              name="phone_number"
              onChange={handleChange}
              value={emp.phone_number}
            />
          </div>
          <div>
            <label>커미션</label>
            <input
              className="form-control "
              type="text"
              name="commission_pct"
              onChange={handleChange}
              value={emp.commission_pct}
            />
          </div>
          <div>
            <label>메니져</label>
            <input
              className="form-control "
              type="number"
              name="manager_id"
              onChange={handleChange}
              value={emp.manager_id}
            />
          </div>
          <div>
            <label>부서</label>
            <input
              className="form-control"
              type="number"
              name="department_id"
              onChange={handleChange}
              value={emp.department_id}
            />
          </div>
          <div>
            <label>직책</label>
            <input
              className="form-control"
              type="text"
              name="job_id"
              onChange={handleChange}
              value={emp.job_id}
            />
          </div>
          <div>
            <label>급여</label>
            <input
              className="form-control"
              type="text"
              name="salary"
              onChange={handleChange}
              value={emp.salary}
            />
          </div>
          <div>
            <label>입사일</label>
            <input
              className="form-control"
              type="date"
              name="hire_date"
              onChange={handleChange}
              value={convertDate(emp.hire_date)}
            />
          </div>
          <input className="btn btn-primary" type="submit" value="수정하기" />
          <input className="btn btn-secondary" type="reset" value="취소하기" />
          <Link to="/emp/emplist" className="btn btn-danger">
            리스트보기
          </Link>
        </form>
      </div>
    </>
  );
};
export default EmpUpdate;
