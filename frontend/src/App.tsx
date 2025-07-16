import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/pages/LoginForm';
import Dashboard from './components/pages/Dashboard';
import ProtectedRoute from './components/routes/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
