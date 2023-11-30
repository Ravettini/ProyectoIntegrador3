import React, { useState, useEffect } from "react";

export const Navxd = () => {
 

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">
          <span className={`navbar-text ${isScrolled ? "navbar-text-scrolled" : ""}`}>StockMasters</span>
          <div className="botonesnav">
            <a className="btn btn-success" href="Home">
              Home
            </a>
            <a className="btn btn-primary" href="">
              Acceder
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
