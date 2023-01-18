import React, { Component } from "react";
import './Login.css';
import {Button, Container, Form} from "react-bootstrap";
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Link, } from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";
import AddPatient from "./AddPatient";
import AllPatients from "./AllPatients";

import AddStudy from "./AddStudy";
import Patient from "./Patient";
import {useRef} from 'react';


function Login() {
  const [doctors, setDoctors] = useState([]); // doctors is a state variable, setPatients is a func which updates it
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  // let url="http://localhost:3000/Main";
  // let element = <li class="buttonic" ><Link to="/Main" >Log in</Link></li>;
  const [state,setState]=useState(false);
  const [isShown, setIsShown] = useState(true);

  const hideClick = e => { 
    setIsShown(false);
  };

  const element = () => {
    if (state){
      return <li class="buttonic" ><Link to="/Main" onClick={hideClick} >Log in</Link></li>;
    }
    else{
      return <p>Access Unauthorized</p>;
    }
  }

  useEffect(() => {
    axios
    .get('http://127.0.0.1:8000/api/doctors/')
    
    .then(response => {
    console.log(response.data)
    setDoctors(response.data);

    })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    }, []);

  function handleClick() {
    console.log(inputRef.current.value);
    console.log(inputRef2.current.value);
    let usr = [];
    let pas = [];
    let userfound = [];
    let passfound = [];
    
    usr = inputRef.current.value;
    pas = inputRef2.current.value;
    userfound = doctors.find((data) => {
      return data.username === usr;
    });
    passfound = doctors.find((data) => {
      return data.password === pas;
    });
    if (userfound && passfound) {
      console.log('tru');
      setState(true);
      // console.log(state);
      //element=<a class="btn btn-primary" href={url}>Log In</a>;
    }
    // if(state) element=<a class="btn btn-primary" href={url}>LinkedIn handle</a>;

    

  }

    return (
        <div>
          <Router>
            {isShown && (
          <Container id="main-container" className="d-grid h-100">
          <Form id="sign-in-form" className="text-center p-3 w-100">
            <h1 className="mb-3 fs-3 fw-normal">Body Temperature Cards Platform</h1>
            <Form.Group controlId="sign-in-email-address">
              <Form.Control type="username" size="lg" placeholder="UserName"  ref={inputRef} className="position-relative" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="sign-in-password">
              <Form.Control type="password" size="lg" placeholder="Password"  ref={inputRef2} className="position-relative" />
            </Form.Group>
            <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
            </Form.Group>
            <div className="d-grid">
            <div>
              {/* {userfound && <h2>{userfound.username}</h2>} */}
            </div>
            
            <a onClick={handleClick} class="btn btn-primary">Sign In</a>
              
            </div>
            {/* <div>{state && element}</div> */}
            {element()}
            <p className="mt-5 text-muted">&copy; 2021-2022</p>
          </Form>
        </Container>
            )}
        <Routes>
          <Route path="/Main" element={<Main />}>
          <Route path="AllPatients" element={<AllPatients />} />
          <Route path="AddPatient" element={<AddPatient />} />
          <Route path="Patient/:pesel" element={<Patient />}/>
          <Route path="Patient/:pesel/AddStudy" element={<AddStudy />}/>
          </Route>
        </Routes>
        </Router>
        </div>
    );
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
