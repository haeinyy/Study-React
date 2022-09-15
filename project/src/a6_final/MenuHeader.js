import { Link } from "react-router-dom";
import $ from "jquery";

const MenuHeader = (props) => {
  const handleClick = (e) => {
    $(".active").each(function (index, item) {
      $(item).removeClass("active");
    });
    $(e.target).addClass("active");
  };  

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li>
              <Link to="/emp" className="nav-link active" onClick={handleClick}>
                직원메뉴
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/emp/emplist"
                className="nav-link"
                onClick={handleClick}
              >
                직원조회
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/emp/empinsert"
                className="nav-link"
                onClick={handleClick}
              >
                직원등록
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default MenuHeader;
