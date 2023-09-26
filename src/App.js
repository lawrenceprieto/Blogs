import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import DeployReactToGHPages from "./pages/DeployReactToGHPages";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/deploy-reactapp-to-ghpages" element={<DeployReactToGHPages />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
