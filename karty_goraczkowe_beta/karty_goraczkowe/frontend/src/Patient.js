import React, { useState, useEffect } from "react";
import {Button, Container, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";
import AddStudy from "./AddStudy";

const Patient = () => {
    const [patients, setPatients] = useState([]);
    const [study, setStudy] = useState([]);
    const [isShown, setIsShown] = useState(true);
    const [filteredData, setFilteredData] = useState(study);
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
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
      fetchStudy();
    },[]);
    const fetchStudy = () => {
      axios
      .get('http://127.0.0.1:8000/api/bodytemperature/')
      
      .then(response => {
      console.log('study' + response.data)
      setStudy(response.data);
      // setFilteredData(response.data);
      })
      .catch(error => {
      console.log('Error getting fake data: ' + error);
      })
      let result = [];
        let value = pesel;
        console.log(pesel);
        result = study.filter((data) => {
          return data.pesel.search(value) != -1;
        });
        // result = study.find((data) => {
        //   return data.pesel === pesel;
        // });
        setFilteredData(result);
        console.log(result);
      };

      // function handleClc() {
      //   let result = [];
      //   let value = pesel;
      //   console.log(pesel);
      //   result = study.filter((data) => {
      //     return data.pesel.search(value) != -1;
      //   });
      //   setFilteredData(result);
        
      // }

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
      <div class="studies">
        <table class='table'>
            <thead>
            <tr>
              <th>Measurement</th>
              <th>Measurement Date</th>
            </tr>
            </thead>
            <tbody>
        {filteredData.map((value,index)=>{
          return(
            // <li key={value.measurement} class="listpesel"><Link to={`/Main/Patient/${value.measurement}`} >{value.measurement}</Link>    
            // </li>
            <tr key={value.pesel}>
              <td>{value.measurement}</td>
              <td>{value.measurement_date}</td>
            </tr>
          )
        })}
        </tbody>
        </table>
      </div>
    {isShown && <Studies/>}
    </div>
    );
  };
    export default Patient;

  function Studies() {
    const {pesel} = useParams();
    const [isShown, setIsShown] = useState(true);
    const handleClick = e => { 
        setIsShown(false);
      };
    return(
        
        <div>

            <li class="buttonic3" ><Link to={`/Main/Patient/:pesel/AddStudy`} onClick={handleClick} >AddStudy</Link></li>
        </div>

    );
  }
  
  

