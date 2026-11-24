
import { NavLink } from "react-router";

export default function Menu() {
  return (
    <nav style={{
      display: "flex",
      gap: "20px",
      padding: "20px",
      backgroundColor: "#1976d2"
    }}>
      <NavLink to="/home" end>Home</NavLink>
      <NavLink to="/product">Products</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
    </nav>
  );
}
