import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <div className="text-sm text-text-secondary flex items-center gap-2">
      <Link to="/" className="hover:text-text-primary">
        Dashboard
      </Link>

      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");

        return (
          <span key={to} className="flex items-center gap-2">
            <span>/</span>
            <Link to={to} className="capitalize hover:text-text-primary">
              {value}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;