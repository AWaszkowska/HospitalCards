import React, { Component } from "react";
import {Button, Container, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function AddStudy() {
  
        return(
            <div> 
                <header>
                    <h1>Add Study</h1>
                    <p>Please, insert Patient's body temperature and date of the study in the following fields.</p>
                </header>
                {/* <Container id="main-container" className="d-grid h-100">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Temperature</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Date</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                </div>
               
                </Container> */}
            </div>
        )

}

export default AddStudy;