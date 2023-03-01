import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
          <Outlet /> {/* just like a props.children kind of thing */}
      </main>
    </>
  );
}

export default RootLayout;
