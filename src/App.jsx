import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import PrivacyPolicyPage from "./pages/policy/privacyPolicyPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/politicas/Politica_de_privacidad"
          element={<PrivacyPolicyPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
