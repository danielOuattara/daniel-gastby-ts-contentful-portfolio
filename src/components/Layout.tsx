import * as React from "react";
import { Navbar, Sidebar, Footer, Submenu } from "./";
import "../assets/css/main.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
