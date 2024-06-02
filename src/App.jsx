import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <main className="container-fluid">
        <Header />
        <Outlet />
      </main>
      <footer className="footer fixed-bottom bg-light">
        <Footer />
      </footer>
    </>
  );
}

export default App
