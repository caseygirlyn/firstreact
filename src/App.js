import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Packinglist from './components/Packinglist';
import AddPackinglist from './components/AddPackinglist';
import About from './components/pages/About'
import uuid from 'uuid';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    health: [{
      "id": 1,
      "item": "band-aids",
      "isdeleted": false
    },
    {
      "id": 2,
      "item": "pain killers",
      "isdeleted": false
    },
    {
      "id": 3,
      "item": "allergy medication",
      "isdeleted": false
    },
    {
      "id": 4,
      "item": "insect repellent",
      "isdeleted": false
    },
    {
      "id": 5,
      "item": "reading glasses",
      "isdeleted": false
    }]
  }

  /*componentDidMount() {
    axios.get('http://girlyn.com/packinglist.json').then(res => this.setState({ health: res.data }))
  }*/

  markDelete = (id) => {
    this.setState({health: this.state.health.map(packinglist => {
      if(packinglist.id === id){
        packinglist.isdeleted = !packinglist.isdeleted
      }
      return packinglist
    })})
  }
  delPackinglist = (id) => {
    this.setState({ health: [...this.state.health.filter(packinglist  => packinglist.id !== id)]})
  }
  addPackinglist = (item) => {
    const newItem = {
      id: uuid.v4(),
      item,
      isdeleted: false
    }
    this.setState({ health: [...this.state.health, newItem ]})
  }

  render() {
    //console.log(this.state.health)
    return (
      <Router>
          <div className="App">
            <div className="container">
              <Header />
               <Route exact path="/firstreact/" render={props => (
                <React.Fragment>
                  <Packinglist packinglist={this.state.health} markDelete = {this.markDelete} delPackinglist = {this.delPackinglist}/>
                  <AddPackinglist addPackinglist = {this.addPackinglist}/>
                </React.Fragment>
                )}/>
                <Route path="/firstreact/about" component = {About} />
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
