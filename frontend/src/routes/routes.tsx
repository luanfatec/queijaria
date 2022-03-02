import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useAuth } from "../hooks/Login/login";

// Components
import Login from "../pages/login";
import PanelLayout from "../pages/panel/layout"; // Pagina principal do App interno...
import PageNotFound from "../pages/notFound";
import PanelHome from "../components/panel/panel";
import Users from '../components/panel/users';


const AppRoute = function () {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <PanelLayout>
          <Routes>
            <Route path="/" element={<PanelHome />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </PanelLayout>
      </BrowserRouter>
    );
  }
}

export default AppRoute;