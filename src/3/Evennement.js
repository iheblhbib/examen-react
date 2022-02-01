import React, { Component } from 'react'


class Evennement extends Component {

    constructor(){
        super()
        this.state = {
            x: 0,
            color: 'black'
        }
        
        this.plus_un = this.plus_un.bind(this);
        this.moins_deux = this.moins_deux.bind(this);
        this.rouge = this.rouge.bind(this);
        this.vert = this.vert.bind(this);

    }

    plus_un(){
        this.setState(
            plus => {
                return{
                    x: plus.x + 1                   
                }
            } 
        );
       
    }
    moins_deux(){
        this.setState(
            plus => {
                return{
                    x: plus.x - 2                  
                }
            } 
        );
     }

     vert(){
        this.setState(
            () => {
                return{
                    color: 'green'                  
                }
            } 
        );
     }

     rouge(){
        this.setState( () => {
                return{
                    color: 'red'                  
                }
            } 
        );
     }



    

    render() {
        return (
            <div>
                
                <h1 className='f1'> 
                    <font color={this.state.color}> 
                        {this.state.x}
                    </font> 
                </h1>

                <button className='pa2  ma2 br3 b--green bg-lightest-blue' onClick={this.plus_un}>
                    + 1 
                </button>

                <button className='pa2 ma2 br3 b--green bg-lightest-blue' onClick={this.moins_deux}>
                    - 2
                </button>

                <button className='pa2 ma2 br3 b--red bg-light-red' onClick={this.rouge}>
                    Rouge
                </button>

                <button className='pa2 ma2 br3 b--green bg-light-green' onClick={this.vert}>
                    Vert
                </button>

            </div>
        );
    }
}


export default Evennement;