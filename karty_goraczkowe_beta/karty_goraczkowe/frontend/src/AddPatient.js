import React, { Component } from "react";
import {Button, Container, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function AddPatient() {
    // declaring states needed to store the input values and message (success/fail)
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [birth_date, setBirthDate] = useState("");
    const [pesel, setPesel] = useState("");
    const [creation_date, setCreationDate] = useState("");
    const [gender, setGender] = useState("");
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
            let res = await fetch('http://127.0.0.1:8000/api/patients/gitbagh',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                name: name,
                surname: surname,
                birth_date: birth_date,
                pesel: pesel,
                creation_date: creation_date,
                gender: gender,
            }),
            });
        let resJson = await res.json();
        if (res.status === 200) {
            setName("");
            setSurname("");
            setBirthDate("");
            setPesel("");
            setCreationDate("");
            setGender("");
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
        <h1>Add  Patient</h1>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            />
            <label>Surname:</label>
            <input
            type="text"
            value={surname}
            placeholder="Surname"
            onChange={(e) => setSurname(e.target.value)}
            />
            <label>Birth Date:</label>
            <input
            type="date"
            value={birth_date}
            placeholder="Birth Date"
            onChange={(e) => setBirthDate(e.target.value)}
            />
            <label>Pesel:</label>
            <input
            type="text"
            pattern='[0-9]*'
            value={pesel}
            placeholder="Pesel"
            // onChange={(e) => {
            //     if (/[0-9]/.test(e.key))
            //     {e.preventDefault();}
            //     else
            //     {setPesel(e.target.value);}
            // } 
            // }
            onInput={(e) => setPesel(e.target.value)}
            />
            <label>Creation Date:</label>
            <input
            type="date"
            value={creation_date}
            placeholder="Creation Date"
            onChange={(e) => setCreationDate(e.target.value)}
            />
            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option opt="M">M</option>
                <option opt="K">K</option>
            </select>

            <button type="submit" id="addpatient" >Add Patient</button>

            <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
        </div>
    );
        
}

export default AddPatient;