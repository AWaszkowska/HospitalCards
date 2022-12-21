import React, { Component } from "react";
import {useState, useEffect} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, NavLink, Link, } from "react-router-dom";
import AllPatients from "./AllPatients";
import AddPatient from "./AddPatient";
import axios from 'axios';
import Patient from "./Patient";
 
// class Main extends Component {
//   render() {
function Main() {
  const [isShown, setIsShown] = useState(true);
  const handleClick = e => { 
    setIsShown(false);
  };

  const [patients, setPatients] = useState([]); // patients is a state variable, setPatients is a func which updates it
  const [filteredData, setFilteredData] = useState(patients);
  // useEffect(() => {
  //   fetchPatients();
  // }, []);
  // const fetchPatients = () => {
  //   axios
  //   .get('http://127.0.0.1:8000/api/patients/')  // get req returns a promise
  //   .then((res) => {      //inside the then block we log our response
  //     console.log(res);
  //     setPatients(res.data);
  //     setFilteredData(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
    
  // };

  useEffect(() => {
    axios
    .get('http://127.0.0.1:8000/api/patients/')
    
    .then(response => {
    console.log(response.data)
    setPatients(response.data);
    setFilteredData(response.data);
    })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    }, []);

  const handleSearch = (e) =>{
    let value = e.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = patients.filter((data) => {
      return data.Pesel.search(value) != -1;
    });
      if (patients.pesel.includes(e.target.value))
        {setFilteredData(result);}
  }


    return (   
      
      <div>
        <Router>
        <section id="nav-bar">

          <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="logo.png" alt="logo"></img></a>
            
            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li><Link to="/AllPatients" onClick={handleClick} >All Patients</Link></li>
                <li><Link to="/AddPatient" onClick={handleClick} >Add Patient</Link></li>
              </ul>
              
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" onChange={(e) => handleSearch(e)} placeholder="Search Patient by Pesel" aria-label="Search"></input>
                <div style={{padding:10}}>
                  {filteredData.map((value,index)=>{
                  return(
                  <div key={index}>
                      {value.pesel}
                  </div>
                  )
                  })}
                </div>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Go To This Patient</button>
              </form>
              
            </div>
            
          </div>
          
          </nav>

</section>
{isShown && <Box/>}
<section id="space">
<p></p>
</section>



{/* <section id="card">
<div class="card">
  <div class="card-body">
  <h5 class="card-title">Body Temperature Cards Virtual Platform</h5>
    <p class="card-text">Welcome to our Hospital Virtual Platform. If you are not a Doctor of our Hospital, please exit. Any unauthorized access to the platform will be prosecuted.</p>
    <a href="https://www.bible.com/pl/" class="btn btn-primary">Exit</a>
  </div>
</div>
</section> */}
<Routes>
    <Route exact path="/AllPatients" element={<AllPatients />}></Route>
    <Route exact path="/AddPatient" element={<AddPatient />}></Route>
  </Routes>
</Router> 
      </div>
           
    );
  }
//}
 
export default Main;

function Box() {
  return (
    <section id="card">

<div class="card">
  <div class="card-body">
  <h5 class="card-title">Body Temperature Cards Virtual Platform</h5>
    <p class="card-text">Welcome to our Hospital Virtual Platform. If you are not a Doctor of our Hospital, please exit. Any unauthorized access to the platform will be prosecuted.</p>
    <a href="https://www.bible.com/pl/" class="btn btn-primary">Exit</a>
  </div>
</div>
</section>
  );
}