import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import AuthProvider from "./providers/AuthProvider.jsx";
import { Router } from "./router/router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="w-full min-h-screen bg-white">
          <RouterProvider router={Router} /> {/* No ScrollToTop here */}
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
