import styled from "styled-components";



export const DetailDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: url(${props => props.back});
  background-size: cover;

  .btn-primary{
      color: white !important;
  }

  .card-img-top{
      width: 100%;
      height: 400px;
  }

  .card, .list-group-item{
    
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  }
`