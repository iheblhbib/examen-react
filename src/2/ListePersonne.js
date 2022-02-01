import React , {Component} from 'react';
import api from './Api';
import Personne from './Personne';

import SearchBox from './SearchBox';

class ListePersonne extends Component {

    constructor(){
        super()
        this.state = {
            Personnes: api,
            searchfield: ''
        };
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
      }

    afficher(Personnes)
    {
        const liste = Personnes.map(Personnes =>
            <Personne                
                key={Personnes.id}
                id={Personnes.id}
                nom={Personnes.nom}
                prenom={Personnes.prenom}
                age={Personnes.age}
                profession={Personnes.profession}  
                photo={Personnes.photo}  
            />);

            return liste;
    }



    render(){

        const { Personnes, searchfield } = this.state;
        const filteredPersonnes = Personnes.filter(Personne =>{
            var searched =  Personne.nom.toLowerCase() + '' + 
                            Personne.prenom.toLowerCase() + '' + 
                            Personne.profession.toLowerCase() + '' + 
                            Personne.age;
          return searched.includes(searchfield.toLowerCase());
        });


        return(
            <div className='tc'>
                <SearchBox searchChange={this.onSearchChange}/>
                { this.afficher(filteredPersonnes) }                 
            </div>
        );

    }
}

export default ListePersonne;