import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Page imports
import Home from "./Home";
import LoginPage from "./Login";
import Dashboard from "./Dashboard";
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
