import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap/";
import Liste from './Liste'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }}

  render() {
    return (
      <div className="container top-buffer" >
            <Card>
                <Card.Header>FAKE PERSON GENERATOR</Card.Header>
                <Card.Body>
                    <Card.Text>
                       Generate fake person information
                    </Card.Text>
                   
                    <Liste/>
                    
                </Card.Body>
                
            </Card>
            
        </div>
    );
}
}