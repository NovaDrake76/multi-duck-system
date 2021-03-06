import React, { useState } from "react";
import { Link } from "react-router-dom";
import Duck from "../images/duck.webP";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";

const Header = (props) => {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <Link to="/">
          <MDBNavbarBrand style={{ color: "white" }}>
            <img src={Duck} height="30" alt="" loading="lazy" />
            {props.title}
          </MDBNavbarBrand>
        </Link>
        <nav aria-label="breadcrumb">
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <Link to="/post" style={{ color: "white" }}>
                Criar Post
              </Link>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </nav>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                href="https://hallycoins.netlify.app"
                style={{ color: "white" }}
                target="_blank"
              >
                Hallycoins
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
