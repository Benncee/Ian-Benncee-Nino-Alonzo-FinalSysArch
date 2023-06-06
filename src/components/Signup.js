import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBFooter
} from 'mdb-react-ui-kit';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/signup", {
                email,
                password,
                firstName,
                lastName,
                contact,
                address,
            })
            .then(res => {
                if (res.data === "exist") {
                    alert("User already exists");
                } else if (res.data === "notexist") {
                    navigate("/signup", { state: { id: email } });
                    alert("User registered successfully");
                }
            })
            .catch(e => {
                alert("Wrong details. Please try again.");
                console.log(e);
            });
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div>
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


            <MDBNavbar expand="lg" light bgColor="white">
                <MDBContainer>
                    <MDBNavbarBrand>
                        <Link className="navbar-brand" to="/">
                            Job-Seek
                        </Link>
                    </MDBNavbarBrand>
                    <MDBNavbarNav className="justify-content-end">
                        <MDBNavbarItem>
                            <MDBNavbarLink href="/">Back</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBContainer>
            </MDBNavbar>
            <MDBContainer fluid>
                <MDBCard className="text-black m-5" style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md="10" lg="6" className="order-2 order-lg-1 d-flex flex-column align-items-center">
                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size="lg" />
                                    <MDBInput
                                        label="Your Email"
                                        id="form2"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size="lg" />
                                    <MDBInput
                                        label="Password"
                                        id="form3"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size="lg" />
                                    <MDBInput
                                        label="First Name"
                                        id="form4"
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size="lg" />
                                    <MDBInput
                                        label="Last Name"
                                        id="form6"
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size="lg" />
                                    <MDBInput
                                        label="Contact"
                                        id="form7"
                                        type="text"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size="lg" />
                                    <MDBInput
                                        label="Address"
                                        id="form8"
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size="lg" />
                                </div>
                                <div className="mb-4">
                                    <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Accept terms and conditions" />
                                </div>
                                <MDBBtn className="mb-4" size="lg" onClick={submit}>
                                    Register
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md="10" lg="6" className="order-1 order-lg-2 d-flex align-items-center">
  <MDBCardImage src="https://chsva.org/wp-content/uploads/2018/03/inspirational-social-worker-quotes-naswe-Lp6pZY-clipart.jpg" fluid style={{ width: '600px', height: '600px' }} />
</MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
            <MDBFooter backgroundColor="light" className="text-center py-3">
        <MDBContainer>
          <p className="mb-0">
            &copy; Job-Seek 2023. All rights reserved. 
          </p>
        </MDBContainer>
      </MDBFooter>
        </div>
    );
}

export default Login;
