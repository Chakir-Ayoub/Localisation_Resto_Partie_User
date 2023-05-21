import './App.css';
import GetStart from './GetStart';
import Home from './Home';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';

class App extends Component {
  render() {
    const divStyle = {
      backgroundColor: 'black',
    };

    return (
      <Router>
        <div style={{ overflow: 'hidden' }}> {/* Ajoutez ici l'attribut overflow: hidden */}
          <switch>
            <div style={divStyle}>
              <center>
                <div className="container site" style={{ textAlign: 'center' }}>
                  <h1 className="text-logo">
                    <FiMapPin />
                    Géolocalisation Restaurant
                    <FiMapPin />
                  </h1>
                </div>
              </center>

              <Route path="/" exact={true} component={GetStart} />
            </div>
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;
