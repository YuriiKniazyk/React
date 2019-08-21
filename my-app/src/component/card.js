import React, {Component} from 'react';
import './style.css';

class Card extends Component{

    state = {
        showContent: true,
        inputvalue: '',
        inputContent: false
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
       this.setState({inputvalue: '', inputContent: false});
        
    }

    ChangeInput = (e) =>{
       this.setState({inputvalue: e.target.value, inputContent: true});
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
                <div>
                    <input type='text' value={this.state.inputvalue} onChange={this.ChangeInput}/>
                    <input type='button' value='Create' onClick={this.onCreate} /> 
                </div> 
                <div>
                    {this.state.inputContent && <div className='cont'>Yooho</div>}
                </div>                           
            </div>
        )
    }
}

export default Card;