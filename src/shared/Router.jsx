import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";

const Router = () => {
  return (
    // routing 설정
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
