import React, { useState, useEffect } from "react";
import {Button, Container, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import AddStudy from "./AddStudy";

const Patient = () => {
    const [patients, setPatients] = useState([]);
    const [isShown, setIsShown] = useState(true);
    const handleClick = e => { 
        setIsShown(false);
      };
    
    const {pesel} = useParams();
  useEffect(() => {
      fetchPatient();
    }, []);
  const fetchPatient = () => { 
      axios
        .get(
        //   `http://127.0.0.1:8000/api/patients/?pesel=${match.params.pesel}/`
        `http://127.0.0.1:8000/api/patients/${pesel}`
        )
        .then((res) => {
          setPatients(res.data);
        //   console.log(res.data);
        })
        .catch((err) => console.log(err));
    };
    // const propertyVals = Object.entries(patients);
    // console.log(propertyVals);
  return (
    <div>
      {Object.keys(patients).map(key => {
        return (
          <div class='onepatient' key={key}>
            <h1>{key}: {patients[key]}</h1>
          </div>
        );
      })}
    {isShown && <Studies/>}
    </div>
    );
  };
    export default Patient;

  function Studies() {
    const [isShown, setIsShown] = useState(true);
    const handleClick = e => { 
        setIsShown(false);
      };
    return(
        
        <div>

            <li class="buttonic3" ><Link to={`/Patient/`} onClick={handleClick} >AddStudy</Link></li>

                <Routes>
                    <Route exact path="/Patient/:pesel/AddStudy" element={<AddStudy />}></Route>
                </Routes>      
        </div>

    );
  }
  
  

