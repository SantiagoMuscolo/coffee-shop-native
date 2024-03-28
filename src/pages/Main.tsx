import { Route, Routes } from "react-router-native";
import Hero from "./Hero";
import ProductsList from "./ProductsList";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/products-list" element={<ProductsList />} />
    </Routes>
  )
}

export default Main;
