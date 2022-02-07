import React, { Component } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Menu from './Menu';

class Main extends Component {
    render(){
        return(
            <>
                <Header />
                <div className="container"> 
                    <div className="row">
                        <div className="m-auto col-5">
                            <Gallery />
                        </div>
                    </div>
                </div>
                <Menu />
            </>
        )
    }
}

export default Main;