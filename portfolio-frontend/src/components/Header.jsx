"use client"

import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link"
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            My Portfolio
          </Link>

          <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <Link to="/" className={isActive("/")} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className={isActive("/about")} onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/projects" className={isActive("/projects")} onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link to="/contact" className={isActive("/contact")} onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>

          <div className="nav-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
