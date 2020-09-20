import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MenuItem extends Component {
  render() {
  return (
    <div class="col mb-4">
    <div class="card">
      <img src={this.props.item.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{this.props.item.name}</h5>
        <h6 class="card-text">From: {this.props.item.restaurant}</h6>
        <h6 class="card-text">Price: {this.props.item.price}</h6>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="text-center"><input text={this.props.item.qty} type="number" class="form-control" placeholder="Qty" min="1" hidden /></p>
        <button class="btn btn-primary mt-auto" click="alert('hi')">Add</button>
      </div>
    </div>
  </div>
  );
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       menuitems:[] 
    }
    };

    componentWillMount() {
      const apiUrl = 'http://localhost:9000/api/menuitems';
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
              console.log('This is your data', data.data)
              this.setState({
                  menuitems: data.data
              }
              );
          }
        )
    }
  
  
  render() {
  return (
    <main role="main">
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Best food delivery service in town!</h1>
        <p>After hearing the success of food delivery start-ups, our client, Karen, decided to start her own company, DropBearEats (think Menulog, Deliveroo, Uber Eats, etc.) She has already told your manager the specification of the project. You, as the only software developer, are responsible for developing this single page web application. To keep our client happy, you have to meet all the listed requirements.</p>
      </div>
    </div>  
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          {this.state.menuitems.map((item,i) => {
                return (<MenuItem item={item} key={i} />)
          })}
      </div>
    </div>
    </main>
  );
  }
}

export default App;
