import React from "react";
import { Link } from "react-router-dom";

const EmpMenu = () => {
  return (
    <div>
      <p>Emp Home! </p>
      <Link to="/emp/emplist">
        <button className="btn btn-primary">직원조회</button>
      </Link>
      <Link to="/emp/empinsert">
        <button className="btn btn-danger">직원등록</button>
      </Link>
    </div>
  );
};

export default EmpMenu;
