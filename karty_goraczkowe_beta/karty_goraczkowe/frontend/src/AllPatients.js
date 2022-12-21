import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Container, Form, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// create func fetchpatiensts, then use useEffect to call it
const AllPatients = () => {
  const [patients, setPatients] = useState([]); // patients is a state variable, setPatients is a func which updates it
useEffect(() => {
  fetchPatients();
}, []);
const fetchPatients = () => {
  axios
   .get('http://127.0.0.1:8000/api/patients/')  // get req returns a promise
   .then((res) => {      //inside the then block we log our response
    console.log(res);
    setPatients(res.data);
   })
   .catch((err) => {
    console.log(err);
   });
};
  return(

    <div>
      <h1>All Patients</h1>
      <div className='patient-container'>
          <table class='table'>
            <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Birth Date</th>
              <th>Pesel</th>
              <th>Creation Date</th>
              <th>Gender</th>
            </tr>
            </thead>
            <tbody>
              {patients.map(patients =>
                <tr>
                  <td>{patients.id}</td>
                  <td>{patients.name}</td>
                  <td>{patients.surname}</td>
                  <td>{patients.birth_date}</td>
                  <td>{patients.pesel}</td>
                  <td>{patients.creation_date}</td>
                  <td>{patients.gender}</td>
                </tr>
              )}
            </tbody> 
          </table>
      </div>
    </div>
    
  );
};

export default AllPatients;