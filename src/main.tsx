import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SidebarProvider } from "./components/ui/sidebar.tsx";
import AppSideBar from "./components/AppSideBar.tsx";
import { BrowserRouter } from "react-router-dom";

const defaultOpen = localStorage.getItem("sidebar_state") === "true";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSideBar />

        <App />
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>
);
