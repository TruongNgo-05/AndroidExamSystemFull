import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";

import { Analytics } from "@vercel/analytics/react";

import "antd/dist/reset.css";
import "./styles/app.css";
import "./styles/modern.css";
import "./styles/console.css";
import "./styles/routes.css";
import "./styles/jeli.css";
import "./styles/intro.css";
import "./styles/campus.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
);

import "./styles/games.css";

import "./styles/transfer.css";

import "./styles/home-banner.css";

import "./styles/header-profile.css";
