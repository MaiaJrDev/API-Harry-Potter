import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URLBase } from "../../URLBase";
import noImage from "../../img/noimage.png";
import { DetailDiv } from "./Styled";
import backSons from "../../img/backSonserina.jpg";
import backGrif from "../../img/backGrifinoria.jpg";
import backLufa from "../../img/backLufalufa.jpg";
import backRaven from "../../img/backRavenclaw.jpg";

export default function DetailsWizard() {
  const navigate = useNavigate();
  const param = useParams();
  const house = param.house;
  const wizard = param.name;
  const [wizardDetail, setWizardDetail] = useState();

  useEffect(() => {
    requestDetailWizard();
  }, []);

  const requestDetailWizard = () => {
    axios
      .get(`${URLBase}/house/${house}`)
      .then((res) => {
        setWizardDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const WizardWithDetail =
    wizardDetail &&
    wizardDetail
      .filter((item) => {
        return item.name === wizard;
      })
      .map((item) => {
        return (
          <div className="card" style={{ width: "20em" }} key={crypto.randomUUID()}>
            <img
              src={item.image === "" ? noImage : item.image}
              className="card-img-top"
              alt={item.name}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Casa :</b> {item.house}</li>
              <li className="list-group-item">
                <b>Vivo(a) :</b> {item.alive ? "Sim" : "Não"}
              </li>
              <li className="list-group-item">
                <b>Gênero : </b> {item.gender === "female" ? "Feminino" : "Masculino"}
              </li>
              <li className="list-group-item">
                <b>Aniversário :</b> {item.dateOfBirth ? item.dateOfBirth : 'Não Cadastrado'}
              </li>
              <li className="list-group-item">
                <b>Cor Dos Olhos :</b> {item.eyeColour ? item.eyeColour : 'Não Cadastrado'}
              </li>
              <li className="list-group-item"><b>Patrono :</b> {item.patronus ? item.patronus : 'Não Cadastrado'}</li>
              <li className="list-group-item">
                <b>Funcionário De Hogwarts :</b> {item.hogwartsStaff ? "Sim" : "Não"}
              </li>
              <li className="list-group-item">
                <b>Estudante de Hogwarts :</b> {item.hogwartsStudent ? "Sim" : "Não"}
              </li>
            </ul>
            <div className="card-body">
              <a className="btn btn-primary" onClick={() => navigate(-1)}>
                Voltar
              </a>
            </div>
          </div>
        );
      });

  const renderBackground = () => {
    if (param.house === "ravenclaw") {
      return <DetailDiv back={backRaven}>{WizardWithDetail}</DetailDiv>;
    } else if (param.house === "hufflepuff") {
      return <DetailDiv back={backLufa}>{WizardWithDetail}</DetailDiv>;
    } else if (param.house === "slytherin") {
      return <DetailDiv back={backSons}>{WizardWithDetail}</DetailDiv>;
    } else {
      return <DetailDiv back={backGrif}>{WizardWithDetail}</DetailDiv>;
    }
  };

  return <>{renderBackground()}</>;
}
