import { Link } from "react-router-dom";
import $ from "jquery";

const Menu2Flex = (props) => {
  const handleClick = (e) => {
    $(".active").each(function (index, item) {
      $(item).removeClass("active");
    });
    $(e.target).addClass("active");
  };

  return (
    <div>
      {/* mt4 마진탑 */}
      <h3 className="mt-4">작업목록</h3>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <Link to="/emp" className="nav-link active" onClick={handleClick}>
            직원메뉴
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/emp/emplist" className="nav-link" onClick={handleClick}>
            직원조회
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/emp/empinsert" className="nav-link" onClick={handleClick}>
            직원등록
          </Link>
        </li>
      </ul>
      <hr className="d-sm-none"></hr>
    </div>
  );
};
export default Menu2Flex;
