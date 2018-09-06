import React from 'react';
import ReactDOM from 'react-dom';

export default class Bomb extends React.Component{
  constructor(props){
    super();
    this.state{
      secondsLeft:props.initialCount
    }
  }
  
  render(){
    return(
        <div>`{this.state.secondsLeft} seconds left before I go boom!`</div>
      )
  }
}