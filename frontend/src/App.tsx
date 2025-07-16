import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginFormPage } from "./components/auth/LoginFormPage";
import ConsentPage from "./components/consent/ConsentPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginFormPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<ConsentPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
