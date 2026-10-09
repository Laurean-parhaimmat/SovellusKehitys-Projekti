import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Page imports
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  // Main routes after logging in
  return (
    <Router>
      <Routes>
        {/* Main routes separated to prevent bypassing login */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          {/* Placeholder route for development */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
