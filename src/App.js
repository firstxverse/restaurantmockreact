import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Main from './components/MainComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Restaurant Mock</NavbarBrand>
                </div>
                </Navbar>
                <Main/>
            </div>
        );
    }
}

export default App;