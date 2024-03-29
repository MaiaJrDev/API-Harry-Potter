import styled from "styled-components";

export const GridOfCards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  margin: 0 10%;
  min-height: 100vh;
  gap: 20px;

  .card-img-top {
    width: 100%;
    height: 300px;
  }

  .card {
    width: 100%;

    background: rgba(255, 255, 255, 0.30);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  .btn-primary {
    color: white !important;
  }

  img {
    width: 80%;
    grid-column: 3;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const DivFather = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    to right,
    ${(props) => props.color},
    ${(props) => props.color2},
    ${(props) => props.color3}
  );

  .btn-dark {
    width: 10%;
    margin: 2% 0;
  }

  @media (max-width: 600px) {
    .btn-dark {
      width: 50%;
    }
  }
`;

export const DivSearch = styled.div`
   width: 80%;
   display: flex;
   justify-content: space-evenly;
   align-items: center;


   .form-control{
      width: 20%;
   }

   @media (max-width: 600px){
     flex-direction: column;

     .form-control{
      width: 80%;
      margin-bottom: 5%;
   }
   }
`
