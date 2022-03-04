import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { URLBase } from "../../URLBase";
import { GridOfCards, DivFather } from "./Styled";
import noImage from "../../img/noimage.jpg";

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

  const renderColor = () => {
    if (param.house === "ravenclaw") {
      return (
        <DivFather color={"#0000FF"} color2={"#C0C0C0"} color3={"black"}>
          <button type="button" className="btn btn-dark" onClick={() => navigate('/')}>Voltar</button>
          <GridOfCards>{renderWizards}</GridOfCards>
        </DivFather>
      );
    } else if (param.house === "hufflepuff") {
      return (
        <DivFather color={"#FFFF00"} color2={"#4F4F4F"} color3={"black"}>
          <button type="button" className="btn btn-dark" onClick={() => navigate('/')}>Voltar</button>
          <GridOfCards>{renderWizards}</GridOfCards>
        </DivFather>
      );
    } else if (param.house === "slytherin") {
      return (
        <DivFather color={"#006400"} color2={"#C0C0C0"} color3={"black"}>
          <button type="button" className="btn btn-dark" onClick={() => navigate('/')}>Voltar</button>
          <GridOfCards>{renderWizards}</GridOfCards>
        </DivFather>
      );
    } else {
      return (
        <DivFather color={"#DAA520"} color2={"red"} color3={"black"}>
          <button type="button" className="btn btn-dark" onClick={() => navigate('/')}>Voltar</button>
          <GridOfCards>{renderWizards}</GridOfCards>
        </DivFather>
      );
    }
  };

  const renderWizards = wizards.map((item) => {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={item.image === "" ? noImage : item.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.house}</p>
          <a
            className="btn btn-primary"
            onClick={() =>
              navigate(`/Wizards/Detail/${item.name}/${param.house}`)
            }
          >
            Mais Detalhes
          </a>
        </div>
      </div>
    );
  });

  return <>{renderColor()}</>;
}
