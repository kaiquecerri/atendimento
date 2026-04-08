import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Chamadas from "./Chamadas.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import NovaSenha from "./NovaSenha.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: "/chamadas",
    Component: Chamadas
  },
  {
    path: "/novasenha",
    Component: NovaSenha
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
