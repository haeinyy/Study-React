import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
const EmpDelete = () => {
  const location = useLocation();
  const empid = location.state.empid;
  let navigate = useNavigate();
  console.log(empid);
  Axios({
    method: "delete",
    url: `/emp/empDelete.do/${empid}`,
  })
    .then((res) => {
      alert(`성공적으로 삭제 되었습니다.`);
      navigate("/emp/emplist");
    })
    .catch((error) => {
      throw new Error(error);
    });
  return <div></div>;
};
export default EmpDelete;
