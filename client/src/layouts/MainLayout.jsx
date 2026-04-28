import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function MainLayout() {
  return (
    <div className="app-shell app-shell--mobile">
      <div className="phone-stage">
        <div className="phone-shell">
          <Header />
          <main className="page-shell">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
