import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage"
import ProductPage from "./Pages/ProductPage"
import UserPage from "./Pages/UserPage";
import ProductDetailPage from "./Pages/ProductDetailPage"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/productdetail" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
