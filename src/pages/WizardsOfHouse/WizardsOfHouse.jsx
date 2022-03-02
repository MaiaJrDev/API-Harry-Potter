import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import {URLBase} from '../../URLBase'
import {GridOfCards} from './Styled'
import noImage from '../../img/noimage.png'

export default function WizardsOfHouse(){

    
    const param = useParams();

    const [wizards, setWizards] = useState([]);

  useEffect(()=>{
    requestWizardsOfHouse();
  },[])

 const requestWizardsOfHouse = ()  => {
   axios.get(`${URLBase}/house/${param.house}`)
   .then((res) => {
     setWizards(res.data)
   })
   .catch((err) => {
     console.log(err);
   })
 }

 const renderWizards = wizards.map((item) => {
    return (
    <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src={item.image === '' ? noImage : item.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
 })

 console.log(wizards);

    return(
      <GridOfCards>{renderWizards}</GridOfCards>
    )
}