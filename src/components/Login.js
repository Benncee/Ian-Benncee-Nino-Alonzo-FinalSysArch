import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/", {
        email,
        password,
      });

      if (response.data === "exist") {
        history("/home", { state: { id: email } });
      } else if (response.data === "notexist") {
        alert("Wrong password");
      }
    } catch (error) {
      alert("Wrong details");
      console.log(error);
    }
  }

  const backgroundStyle = {
    backgroundImage:
      'url("https://wallpapercave.com/wp/wp2940002.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    backgroundColor: "yellow",
  };

  return (
    <div style={backgroundStyle}>

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

      <MDBContainer className="p-3 my-5 d-flex flex-column align-items-center">
        <form style={{ width: "300px" }}>
          <MDBInput
            label="Email address"
            id="form1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <MDBInput
            label="Password"
            id="form2"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
          <p>Forgot Password</p>
          </div>

          <MDBBtn className="w-100 mb-4" onClick={submit}>
            Sign in
          </MDBBtn>

          <div className="text-center">

            <div className="d-flex justify-content-center">
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
          </div>
        </form>
      </MDBContainer>
    </div>
  );
}

export default Login;
