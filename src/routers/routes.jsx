import { BrowserRouter, Routes, Route } from "react-router-dom";
import LaidingPage from "../pages/LaidingPage";
import MovieDetails from "../pages/MovieDetails";


export default function MyRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LaidingPage/>}  />
          <Route path="/movie/:movieId" element={<MovieDetails/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}
