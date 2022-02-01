
import Ordinateur from './Ordinateur';

const ListeOrdinateur = () => {
  return (
    <div >      
          <Ordinateur
            marque='Lenovo'
            couleur="Noir"
            prix= '2 450'
            image='./images/lenovo-laptop-thinkpad-x1-carbon-gen8-subseries-hero.png'
          /> 

          <Ordinateur
            marque='Apple iMac'
            couleur="Rose"
            prix= '6 999'
            image='./images/M1_iMac_vector.svg.png'
          />

          <Ordinateur
            marque='Apple iMac'
            couleur="Blanc"
            prix= '7 699'
            image='./images/apple-mk442hn-2fa-imac-500x500.png'
          />

          <Ordinateur
            marque='HP'
            couleur="Blanc"
            prix= '1 899'
            image='./images/c07394316.png'
          />

          <Ordinateur
            marque='HP'
            couleur="Noir"
            prix= '2 499'
            image='./images/c06440894_4.png'
          />

          <Ordinateur
            marque='HP'
            couleur="Noir"
            prix= '2 200'
            image='./images/lenovo-laptop-thinkpad-x1-carbon-gen8-subseries-hero.png'
          />
          <Ordinateur
            marque='HP'
            couleur="Noir"
            prix= '2 899'
            image='./images/c04820769.png'
          />
          <Ordinateur
            marque='Asus'
            couleur="Noir"
            prix= '3 999'
            image='./images/Asus_ROG_Zephyrus_M16_2.png'
          />
          <Ordinateur
            marque='Lenovo'
            couleur="Blanc"
            prix= '3 599'
            image='./images/lenovo-laptop-thinkpad-t470s-hero.png'
          />
          <Ordinateur
            marque='HP'
            couleur="Noir"
            prix= '3 199'
            image='./images/téléchargement.png'
          />         
    </div>
  );
}

export default ListeOrdinateur;