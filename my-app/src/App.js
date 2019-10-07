import React, {Component} from 'react';
import Card from './component/card';
import './App.css';

class App extends Component {
  state = {
    count: 0,
    cards: [1,2,3]
  }

  onClickInc = ()=>{
    this.setState((state) => ({count: state.count + 1}));
  }
  onClickDec = ()=>{
    if(this.state.count -1 < 0) return 
      this.setState((state) => (
       {count: state.count - 1}));
  }

  onClickdec100 = ()=>{
    if(this.state.count - 1 < 0) return 
    this.setState((state) => (
     {count: state.count - 100}));
  }
  onClickinc100 = ()=>{
    this.setState((state) => (
     {count: state.count + 100}));
  }

  onReset = () => {
    this.setState((state) => ({count: state.count = 0}));
  }

  onDeleteCard = (cardName) =>{
    this.setState((state) => {
      const newCards = state.cards.filter((card) => card!==cardName);
      return {cards: newCards};
    })
  }

  onCreate = (value) =>{
    this.setState((state) =>{
      let {cards} = state;
       cards.push(value);
       return {cards};
    })
  }

  render(){    
    return (
      <div>This is my first app
        <div className='counter'>
          {this.state.count} <br></br>
          <div>
              <button className = 'red' onClick = {this.onClickInc}>+1</button>
              <button onClick = {this.onClickDec }>-1</button>
              <button onClick = {this.onClickinc100}>+100</button>
              <button onClick = {this.onClickdec100}>-100</button>
              <button onClick={this.onReset}>Reset</button>
          </div>
        </div>
        

        <div> 
          {this.state.cards.map((card) => <Card key={card} cardName={card} onDeleteCard={this.onDeleteCard} onCreate={this.onCreate}/>)}
        </div>
      </div>
    )
  }
}

export default App;


// countHandler = val =>
// this.setState( pevState => ({
//     count: pevState.count + val >= 0 ? pevState.count + val : 0
//     })
// )

// render() {
//   const {count} = this.state;
// return (
//   <div className="App">
//     <div><h1>{this.state.count}</h1></div>
//     <button onClick={this.countHandler.bind(this,1)} value="Plus" >Plus</button>
//     <button onClick={this.countHandler.bind(this,-1)}>Minus</button>
//     <button onClick={this.countHandler.bind(this,-count)}>Reset</button>
//     <button onClick={this.countHandler.bind(this,100)}>Plus 100</button>
//     <button onClick={this.countHandler.bind(this,-100)}>Minus 100</button>
//   </div>
// );
// }