import { ProtectedRoute } from "./guards/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Products } from "./pages/products/products";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
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
