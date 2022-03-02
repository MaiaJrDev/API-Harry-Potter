import styled from "styled-components";


export const GridOfCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10%;
  row-gap: gap;
  gap: 1%;

  .card-img-top{
    width: 100%;
    height: 300px;
  }

  .card{
    width: 80%;
    margin: 0 auto;
    box-shadow: 1px 1px 5px gray;
  }
`

export const DivFather = styled.div`
  width: 100%;
`