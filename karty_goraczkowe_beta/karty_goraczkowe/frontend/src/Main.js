import React, { Component } from "react";
import {useState, useEffect} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, NavLink, Link, } from "react-router-dom";
import AllPatients from "./AllPatients";
import AddPatient from "./AddPatient";
import axios from 'axios';
import Patient from "./Patient";
import AddStudy from "./AddStudy";
 
// class Main extends Component {
//   render() {
function Main() {
  const [isShown, setIsShown] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = e => { 
    setIsShown(false);
  };

  const handleClickMenu = e => {
    setShowMenu(!showMenu);
  }

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
      return data.pesel.search(value) != -1;
    });
    setFilteredData(result);
      // if (patients.pesel.includes(e.target.value))
      //   {setFilteredData(result);}
  }


    return (   
      
      <div>
        <Router>
        
        <section id="nav-bar">
          {isShown &&  (
          <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="logo.png" alt="logo"></img></a>
            
            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="buttonic" ><Link to="/AllPatients" onClick={handleClick} >All Patients</Link></li>
                <li class="buttonic2"><Link to="/AddPatient" onClick={handleClick} >Add Patient</Link></li>
              </ul>
              
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" onChange={(e) => handleSearch(e)} onClick={handleClickMenu} placeholder="Search Patient by Pesel" aria-label="Search"></input>
                {showMenu && (
                <div class="dataResult" style={{padding:10}} onClick={handleClick}>
                  {filteredData.map((value,index)=>{
                  return(
                  // <a key={value.id} class="listpesel"><Link to={"/Patient/${Patient.id}"}>View</Link>
                  //     {value.pesel}
                  // </a>
                  <li key={value.pesel} class="listpesel"><Link to={`/Patient/${value.pesel}`} onClick={handleClick}>{value.pesel}</Link>    
                  </li>
                  )
                  })}
                </div>
                )}
                
              </form>
              
            </div>
            
          </div>
          
          </nav>
          )}
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
    {/* we design a dynamic portion of url to be matched by putting a colon before */}
    <Route exact path='/Patient/:pesel' element={<Patient />}></Route> 
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