import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/pages/LoginForm";
import Consent from "./components/pages/Consent";
import ProtectedRoute from "./components/routes/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Consent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
