import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login" style={{ marginLeft: "10px" }}>
        Login
      </Link>
    </div>
  );
};

export default Navbar;
