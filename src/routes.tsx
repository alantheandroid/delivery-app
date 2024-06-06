import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import RestaurantDetail from "./pages/RestaurantDetail";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/restaurant/:restId" element={<RestaurantDetail />} />
      </Route>
    </Routes>
  );
};
