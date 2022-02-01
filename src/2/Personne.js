import React, { Component } from 'react';

class Personne extends Component {
    render(){
         return (
            <div className="tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5"  >
                <img alt='Personne'  src={this.props.photo} width="200" height="200" />
                <div>
                    <h5>Nom : {this.props.nom}</h5>
                    <h5>Prénom : {this.props.prenom}</h5>
                    <h5>Âge : {this.props.age}</h5>
                    <h5>Profession : {this.props.profession}</h5>
                </div>
            </div>
        );
    }
   
}



export default Personne;