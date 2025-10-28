import { ProtectedRoute } from "./guards/ProtectedRoute";
import { Link, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Products } from "./pages/products/products";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Link to="/login"> Login</Link>
            Please visit login page
          </div>
        }
      />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/terms" element={<Home />} /> */}
      <Route
        path="/products"
        element={<ProtectedRoute>{<Products />}</ProtectedRoute>}
      />
    </Routes>
  );
}

export default App;
