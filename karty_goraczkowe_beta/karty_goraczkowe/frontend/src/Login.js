import React, { Component } from "react";
import './Login.css';
import {Button, Container, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";

class Login extends Component {
  render() {
    return (
        <div>
          <Container id="main-container" className="d-grid h-100">
          <Form id="sign-in-form" className="text-center p-3 w-100">
            <h1 className="mb-3 fs-3 fw-normal">Body Temperature Cards Platform</h1>
            <Form.Group controlId="sign-in-email-address">
              <Form.Control type="username" size="lg" placeholder="UserName" autoComplete="username" className="position-relative" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="sign-in-password">
              <Form.Control type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative" />
            </Form.Group>
            <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
            </Form.Group>
            <div className="d-grid">
            <a href="http://localhost:3000/Main" class="btn btn-primary">Sign In</a>
              {/* <Button variant="primary" size="lg">Sign in</Button> */}
            </div>
            <p className="mt-5 text-muted">&copy; 2021-2022</p>
          </Form>
        </Container>
        </div>
    );
  }
}

export default Login;


 
// class Login extends Component {
//   render() {
//     return (
//         <div>
//           <section id="nav-bar">
//           <nav class="navbar navbar-expand-lg bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#"><img src="logo.png" alt="logo"></img></a>
    
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">All Patients</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/">Add Patient</a>
//         </li>
//       </ul>
//       <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search Patient" aria-label="Search"></input>
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//     </div>
//   </div>
// </nav>
// </section>

// <section id="space">
// <p></p>
// </section>

// <section id="card">
// <div class="card">
//   <div class="card-body">
//   <h5 class="card-title">Body Temperature Cards Virtual Platform</h5>
//     <p class="card-text">Welcome to our Hospital Virtual Platform. If you are not a Doctor of our Hospital, please exit. Any unauthorized access to the platform will be prosecuted.</p>
//     <a href="https://www.bible.com/pl/" class="btn btn-primary">Exit</a>
//   </div>
// </div>
// </section>
//         </div>
        
//     );
//   }
// }
 
// export default Login;
