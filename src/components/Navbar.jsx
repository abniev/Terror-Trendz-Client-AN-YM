import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="flex justify-between">
      <div>
        <Link to="/">
          <h1>Terror Trendz ☠</h1>
        </Link>
        <Link to="/product">Products</Link>
        <Link to="/about">About</Link>
      </div>

      {user && user.isAdmin && (
        <div>
          <Link to="/product/create">Create a product</Link>
        </div>
      )}

      {user ? (
        <div>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <Link to="/signup">sign up</Link>
          <Link to="/login">log in</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
