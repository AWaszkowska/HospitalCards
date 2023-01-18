import React, { Component } from "react";
import {Button, Container, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function AddStudy() {
    // declaring states needed to store the input values and message (success/fail)
    const [pesel, setPesel] = useState("");
    const [measurement, setMeasurement] = useState("");
    const [measurement_date, setMeasurement_date] = useState("");
    const [message, setMessage] = useState("");
    // when the form is submitted it calls a func handleSubmit
    // it is where the data is posted to rest api
    // he let declaration declares a block-scoped local variable, optionally initializing it to a value.
    // we need to stringify data
    // async and await keywords enable asynchronous, promise-based behavior
    // e is the short var reference for event object which will be passed to event handlers
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http://127.0.0.1:8000/api/bodytemperature/',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                pesel: pesel,
                measurement: measurement,
                measurement_date: measurement_date,
            }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
            setPesel("");
            setMeasurement("");
            setMeasurement_date("");
            setMessage("User created successfully");
        } else {
            setMessage("Some error occured");
          }
        } catch (err) {
            console.log(err);
        }
    };
    
    

    return(
        <div className="App">
        <h1>Add Study</h1>
        <form onSubmit={handleSubmit}>
            <label>Pesel:</label>
            <input
            type="text"
            value={pesel}
            placeholder="Pesel"
            onChange={(e) => setPesel(e.target.value)}
            />
            <label>Measurement:</label>
            <input
            type="number"
            step="0.01"
            value={measurement}
            placeholder="Measurement"
            onChange={(e) => setMeasurement(e.target.value)}
            />
            <label>Measurement Date:</label>
            <input
            type="date"
            value={measurement_date}
            placeholder="Measurement Date"
            onChange={(e) => setMeasurement_date(e.target.value)}
            />

            <button type="submit" id="addpatient" >Add Study</button>

            {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
        </form>
        </div>
    );
        
}

export default AddStudy;