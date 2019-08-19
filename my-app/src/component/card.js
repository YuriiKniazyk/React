import React, {Component} from 'react';
import './style.css';

class Card extends Component{

    state = {
        showContent: true,
        inputvalue: ''
    }

    onToogleContent = () =>{
        this.setState((state) => ({
            showContent: !state.showContent
        }));
    }

    onDeleteCard = () =>{
        this.props.onDeleteCard(this.props.cardName);
    };   

    onCreate = () =>{
        this.props.onCreate(this.state.inputvalue);
       this.setState({inputvalue: ''});
        
    }

    ChangeInput = (e) =>{
       this.setState({inputvalue: e.target.value});
    }

    render(){    
        return (
            <div className='card'>
                <div>Card
                    {this.props.cardName}
                    {this.state.showContent && <div>Hide</div> }
                </div>
                <div>
                    <button onClick = {this.onToogleContent}>Hide/Show</button>
                    <button onClick = {this.onDeleteCard}>Delete</button>
                </div>
                
                    <input type='text' value={this.state.inputvalue} onChange={this.ChangeInput}/>
                    <input type='button' value='Create' onClick={this.onCreate} />                             
            </div>
        )
    }
}

export default Card;