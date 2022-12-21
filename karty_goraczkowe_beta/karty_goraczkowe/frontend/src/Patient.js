import React, { Component } from "react";
import {Button, Container, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Patient extends Component {
    render(){
        return(
            <div>
                <header>
                    <h1>Patient</h1>
                    <p>Patient's personal data and all studies.</p>
                </header>
                <Container id="main-container" className="d-grid h-100">

               
                </Container>
            </div>
        )
    }
}

export default Patient;