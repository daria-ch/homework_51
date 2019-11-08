import React, {Component, Fragment} from 'react';
import './App.css';
import Header from "./header";
import Content from './content';
import Footer from './footer';


class App extends Component {
    render() {
        return (
            <Fragment>
              <Header/>
              <Content/>
              <Footer/>
            </Fragment>
        );
    }
}

export default App;
