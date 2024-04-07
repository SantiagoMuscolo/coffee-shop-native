import { Route, Routes } from "react-router-native";
import ProductsList from "./ProductsList";
import ProductDetail from "./ProductDetail";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default Main;
