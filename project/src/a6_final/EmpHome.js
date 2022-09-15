import React from "react";
import { Route, Routes } from "react-router-dom";
import EmpDelete from "./EmpDelete";
import EmpDetail from "./EmpDetail";
import EmpInsert from "./EmpInsert";
import EmpMenu from "./EmpMenu";
import EmpRetrieve from "./EmpRetrieve";
import EmpUpdate from "./EmpUpdate";

const EmpHome = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<EmpMenu />}></Route>
        <Route path="emplist" element={<EmpRetrieve />} />
        <Route path="empdetail/:empid" element={<EmpDetail />} />
        <Route path="empinsert" element={<EmpInsert />} />
        <Route path="empupdate" element={<EmpUpdate />} />
        <Route path="empdelete" element={<EmpDelete />} />
      </Routes>
    </div>
  );
};

export default EmpHome;
