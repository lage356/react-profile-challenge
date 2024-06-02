import { Link, useLocation } from "react-router-dom";

function Navigation() {
    const currentPage = useLocation().pathname;
    

    const navLinks = [
        {path: "/", label: "Home"},
        {path: "/Resume", label: "Resume"},
        {path: "/Portafolio", label: "Portafolio"},
        {path: "/contact", label: "Contact"},
    ];





    return (
        <div className="container-fluid">
        <div className="d-flex justify-content-end">
        <ul className="nav nav-tabs">
          {navLinks.map(({ path, label }) => (
            <ul className="nav-item" key={label}>
              <Link
                to={path}
                className={currentPage === path ? "nav-link active" : "nav-link"}
              >
                {label}
              </Link>
            </ul>
          ))}
        </ul>
        </div>
        </div>
      );
    }


export default Navigation;

