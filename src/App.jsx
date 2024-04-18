import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import PrivacyPolicyPage from "./pages/policy/privacyPolicyPage";
import ComplaintsBookPage from "./pages/complaintsbook/complaintsBookPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/politicas/Politica_de_privacidad"
          element={<PrivacyPolicyPage />}
        />
        <Route
          path="/Libro_de_reclamaciones"
          element={<ComplaintsBookPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
