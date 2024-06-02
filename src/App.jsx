import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <header className="container-fluid">
        <Header />
      </header>
      <main className="container flex-grow-1">
        <div className="row">
          <div className="col-12">
            <Outlet />
          </div>
        </div>
      </main>
      <footer className="footer bg-light">
        <Footer />
      </footer>
    </div>
  );
}

export default App
