import styled from "styled-components";
import imgBack from "../../img/backHome.jpg";

export const FirstDivHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${imgBack});

  .titleHome{
      width: 30%;
      margin-bottom: 5%;
  }

  @media (max-width: 600px) {
    height: fit-content;
    background-repeat: no-repeat;
    background-size: cover;

    .titleHome{
      width: 80%;
    }
  }
`;

export const DivImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 600px){
    display: flex;
    flex-direction: column;
  }
        
`

export const ImgTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  margin: 0 3%;

  .shield {
    width: 100%;
    height: 30vh;

    :hover{
        cursor: pointer;
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition: 0.5s;
    }
}

@media (max-width: 600px){
  width: 50%;
  margin: 5% 0;
}
`