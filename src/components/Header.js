// src/components/Header.js
import { Link } from "gatsby"
import React from "react"
import NavStyle from "../styles/stylus/header.module.styl"
import "../styles/stylus/header.styl"
import Container from "./Container"

export default function Header() {
  return (
    <section id="nav">
      <Container>
        <nav className={NavStyle.navInner}>
          <div className="nav-inner_start">
            <h1 className="emoji">
              <span role="img" aria-label="frown emoji">
                🙁
              </span>
            </h1>
          </div>
          <div className="nav-inner_center">
            <Link to="/" className="link">
              Products
            </Link>
            <Link to="/" className="link">
              Customers
            </Link>
            <Link to="/" className="link">
              Pricing
            </Link>
          </div>
          <div className="nav-inner_end">
            <Link to="/" className={NavStyle.cta}>
              GET STARTED
            </Link>
          </div>
        </nav>
      </Container>
    </section>
  )
}
