import { Route, Routes } from "react-router-native";
import ProductsList from "./ProductsList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default Main;
