
const Ordinateur = ( props ) => {
   
         return (
            <div className="tc grow bg-light-gray br3 pa3 ma2 dib bw2 shadow-5" >
                <img alt={props.marque}  src={props.image} width="250" height="200" />
                <div>
                    <h3>Marque : {props.marque}</h3>
                    <p>Couleur : {props.couleur}</p>
                    <p>Prix : {props.prix} DT</p>
                </div>
            </div>
        );
}



export default Ordinateur;