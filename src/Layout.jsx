import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
