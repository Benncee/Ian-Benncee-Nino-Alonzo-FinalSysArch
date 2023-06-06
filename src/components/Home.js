import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBFooter,
} from "mdb-react-ui-kit";


function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  const handleSearch = () => {
    navigate("/JobSearch");
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2021/09/10045333/Job-Searching-Online-11-Best-Practices-You-Need-to-Know-2-2.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "calc(100vh - 60px)", 
    backgroundColor: "yellow",
  };

  return (
    <div className="homepage">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/Home"style={{ marginLeft: '10px' }}>Job Seeker</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/Home"style={{ marginLeft: '1050px' }}>Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Signup">Register</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/JobSearch">Job Search</a>
      </li>
    </ul>
  </div>
</nav>


      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer>
          <MDBNavbarNav className="justify-content-end">
            <MDBNavbarItem>
              <MDBNavbarLink onClick={handleSearch}>Search Job</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={handleButtonClick}>Logout</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>

      <div style={backgroundStyle}>
      </div>
    </div>
  );
}

export default Home;