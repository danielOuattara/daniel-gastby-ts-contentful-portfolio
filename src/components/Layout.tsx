import * as React from "react";
import { Navbar, Sidebar, Footer, Submenu } from "./";
import "../assets/css/main.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2>Layout</h2>
      {children}
    </>
  );
}
