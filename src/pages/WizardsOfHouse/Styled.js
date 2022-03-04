import styled from "styled-components";


export const GridOfCards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 10%;
  min-height: 100vh;
  gap: 20px;

  .card-img-top{
    width: 100%;
    height: 300px;
  }

  .card{
    width: 100%;
    margin: 0 auto;
    box-shadow: 1px 1px 5px gray;
  }
  .btn-primary{
    color: white !important;
  }

`

export const DivFather = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, ${props => props.color}, ${props => props.color2}, ${props => props.color3});

  .btn-dark{
    width: 10%;
    margin: 2% 0;
  }
`