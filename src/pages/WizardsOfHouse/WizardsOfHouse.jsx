import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { URLBase } from "../../URLBase";
import { GridOfCards, DivFather } from "./Styled";
import noImage from "../../img/noimage.png";

export default function WizardsOfHouse() {
  const param = useParams();
  const navigate = useNavigate();



  const [wizards, setWizards] = useState([]);

  useEffect(() => {
    requestWizardsOfHouse();
  }, []);

  const requestWizardsOfHouse = () => {
    axios
      .get(`${URLBase}/house/${param.house}`)
      .then((res) => {
        setWizards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderWizards = wizards.map((item) => {
    return (
      <div className="card" >
        <img
          className="card-img-top"
          src={item.image === "" ? noImage : item.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.house}</p>
          <a className="btn btn-primary" onClick={() => navigate(`/Wizards/Detail/${item.name}/${param.house}`)}>
            Mais Detalhes
          </a>
        </div>
      </div>
    );
  });

  console.log(wizards);

  return (
    <DivFather>
      <GridOfCards>{renderWizards}</GridOfCards>
    </DivFather>
  );
}
