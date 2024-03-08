import * as React from "react";
import { Navbar, Sidebar, Footer, Submenu } from "./";
import "../assets/css/main.css";
import { TypeSubMenuPageToShow } from "../custom-types";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);
  const [subMenuLocation, setSubMenuLocation] = React.useState({
    subMenuCenterPosition: 0,
    subMenuTopPosition: 0,
  });
  const [subMenuPageToShow, setSubMenuPageToShow] =
    React.useState<TypeSubMenuPageToShow>({
      id: 0,
      url: "",
      page: "",
      subLinks: [],
    });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        setIsSubMenuOpen={setIsSubMenuOpen}
        setSubMenuLocation={setSubMenuLocation}
        setSubMenuPageToShow={setSubMenuPageToShow}
      />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Submenu
        isSubMenuOpen={isSubMenuOpen}
        subMenuLocation={subMenuLocation}
        subMenuPageToShow={subMenuPageToShow}
        setIsSubMenuOpen={setIsSubMenuOpen}
      />
      {children}
      <Footer />
    </>
  );
}
