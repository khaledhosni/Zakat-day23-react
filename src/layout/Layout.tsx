
import { Outlet } from "react-router";
import Menu from "./Menu";

export default function Layout() {
  return (
    <>
      <Menu />

      <main style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px",marginTop: "20px" }}>
        <Outlet />
      </main>
    </>
  );
}
