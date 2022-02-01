import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'; 
import './index.css';

//  les importations de part 1 

import ListeOrdinateur from './1/ListeOrdinateur';


// les importations de part 2

import ListePersonne from './2/ListePersonne';

// les importations de part 3

import Evennement from './3/Evennement';


ReactDOM.render(

    <div className='tc'>
        <h1 className='f1'>Examen React par Iheb Elhabib</h1>
        <hr></hr>
        <h1 className='f3'>Liste des Ordinateurs </h1>

        {/* liste des ordinateurs  */}
        <ListeOrdinateur/>

        <hr></hr>
        <h1 className='f3'>Liste des Personnes </h1>

        {/* Liste des Personnes  */}
        <ListePersonne/>

        <hr></hr>
        <h1 className='f3'>Les evenements </h1>

        {/* les evennement  */}
        <Evennement/>
    
    </div>
    , document.getElementById('root'));

