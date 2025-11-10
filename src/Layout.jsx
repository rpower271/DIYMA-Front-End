import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <header>Navbar</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
