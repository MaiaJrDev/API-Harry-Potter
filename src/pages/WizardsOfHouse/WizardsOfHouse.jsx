import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { URLBase } from "../../URLBase";
import { GridOfCards, DivFather, DivSearch} from "./Styled";
import noImage from "../../img/noimage.jpg";
import LoadingRony from '../../img/loadingRon.gif'

export default function WizardsOfHouse() {
  const param = useParams();
  const navigate = useNavigate();

  const [wizards, setWizards] = useState([]);
  const [loading , setLoading] = useState(true);
  const [inputValue, setInput] = useState('');

  useEffect(() => {
    requestWizardsOfHouse();
    setLoading(true);
  }, []);

  const requestWizardsOfHouse = () => {
    axios
      .get(`${URLBase}/house/${param.house}`)
      .then((res) => {
        setWizards(res.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderColor = () => {
    if (param.house === "ravenclaw") {
      return (
        <DivFather color={"#0000FF"} color2={"#C0C0C0"} color3={"black"}>
          <DivSearch>
          <button type="button" className="btn btn-dark" onClick={() => navigate('/API-Harry-Potter')}>Voltar</button>
          <input type="text" className="form-control" placeholder="Busca Por Nome" onChange={e => setInput(e.target.value)}/>
          </DivSearch>
          <GridOfCards>{loading ? <img src={LoadingRony} /> : renderWizards}</GridOfCards>
        </DivFather>
      );
    } else if (param.house === "hufflepuff") {
      return (
        <DivFather color={"#FFFF00"} color2={"#4F4F4F"} color3={"black"}>
           <DivSearch>
          <button type="button" className="btn btn-dark" onClick={() => navigate('/API-Harry-Potter')}>Voltar</button>
          <input type="text" className="form-control" placeholder="Busca Por Nome" onChange={e => setInput(e.target.value)}/>
          </DivSearch>
          <GridOfCards>{loading ? <img src={LoadingRony} /> : renderWizards}</GridOfCards>
        </DivFather>
      );
    } else if (param.house === "slytherin") {
      return (
        <DivFather color={"#006400"} color2={"#C0C0C0"} color3={"black"}>
           <DivSearch>
          <button type="button" className="btn btn-dark" onClick={() => navigate('/API-Harry-Potter')}>Voltar</button>
          <input type="text" className="form-control" placeholder="Busca Por Nome" onChange={e => setInput(e.target.value)}/>
          </DivSearch>
          <GridOfCards>{loading ? <img src={LoadingRony} /> : renderWizards}</GridOfCards>
        </DivFather>
      );
    } else {
      return (
        <DivFather color={"#DAA520"} color2={"red"} color3={"black"}>
           <DivSearch>
          <button type="button" className="btn btn-dark" onClick={() => navigate('/API-Harry-Potter')}>Voltar</button>
          <input type="text" className="form-control" placeholder="Busca Por Nome" onChange={e => setInput(e.target.value)}/>
          </DivSearch>
          <GridOfCards>{loading ? <img src={LoadingRony} /> : renderWizards}</GridOfCards>
        </DivFather>
      );
    }
  };

  const renderWizards = wizards.filter((item) => {
    return item.name.toLowerCase().includes(inputValue.toLowerCase());
  }).map((item) => {
    return (
      <div className="card" key={crypto.randomUUID()}>
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
              navigate(`/API-Harry-Potter/Wizards/Detail/${item.name}/${param.house}`)
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
