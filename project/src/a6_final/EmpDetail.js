import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpDetail = () => {
  const { empid } = useParams();
  const [emp, setEmp] = useState({});
  //Link컴포넌트를사용하지않고다른페이지로이동을해야하는경우,
  //뒤로가기등에사용하는Hook이다.
  const navigate2 = useNavigate();
  useEffect(() => {
    Axios({
      method: "get",
      url: `/emp/empdetail.do/${empid}`,
      data: { empid: empid },
    })
      .then((res) => {
        setEmp(res.data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [empid]);

  function convertDate(longValue) {
    return new Date(longValue).toLocaleString();
  }

  return (
    <div>
      <h2 align="center"> emp 상세정보</h2>
      <div className="emp-view-wrapper">
        <div className="emp-view-row">
          <label>직원 번호</label>
          <label>{emp.employee_id}</label>
        </div>
        <div className="emp-view-row">
          <label>직원이름</label>
          <label>{emp.first_name}</label>
        </div>
        <div className="emp-view-row">
          <label>입사일</label>
          <label>{convertDate(emp.hire_date)}</label>
        </div>
        <div className="emp-view-row">
          <label>email</label>
          <div>{emp.email}</div>
        </div>
        <button onClick={() => navigate2(-1)} className="btn btn-primary">
          리스트보기
        </button>
        <Link
          to="/emp/empupdate"
          state={{ emp: emp }}
          className="btn btn-primary"
        >
          수정
        </Link>
        <Link
          to="/emp/empdelete"
          state={{ empid: emp.employee_id }}
          className="btn btn-primary"
        >
          삭제
        </Link>
      </div>
    </div>
  );
};
export default EmpDetail;
