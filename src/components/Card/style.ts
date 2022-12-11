import styled from "styled-components";

export const Container = styled.li`
  background-color: transparent;
  min-width: 330px;
  height: 400px;
  perspective: 1000px;
  margin-top: 30px;
  font-family: 'Poppins';
  
  .title-product-text-container{
    margin-top: 15px;
    text-align: start;
    width: 98%;
  }
  h2{
    font-weight: 600;
  }

  .flip-card-inner {
    position: relative;
    width: 99.5%;
    height: 99.5%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    border-radius: 10px;
    text-transform: capitalize;
    background: #ffff;
    border: solid 1px #d9d9d9;
    border-radius: 12px;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  :hover .flip-card-inner {
    transform: rotateY(180deg);
    transition: 1s;
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .imageContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 850px;
    .blurDiv{
          position: sticky(top);
          margin-top: -13%;
          color: #fff;
          height: 45px;
          background-color: #fff;
          filter: blur(9px);
        }
  }
  .flip-card-front {
    /* background-color: #bbb; */
    color: black;

    img {
      margin: 12px 11px 14px 13px;
      width: 120px;
      border-radius: 5px;

      :nth-child(even){
        margin-top: -15px;
        filter: blur(1px);
        border-top-style: solid;
        border-top-color: #fff;
        opacity: 0.6;
        object-fit: cover;
        height: 65px;
        object-position: right bottom;
        transform: rotate(180deg) rotateY(180deg);
      }
    }

  }

  .flip-card-back {
    /* background-color: #bdf1ea; */
    /*  color: black; */
    transform: rotateY(180deg);
    color: var(--color-primary);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: start;
    gap: 1rem;
    padding: 35px;
    padding-top: 15px;
    padding-bottom: 15px;
    
    .flip-card-back-category{
      color: var(--action-primary);
      font-size: 13px;
      font-weight:600
    }
    .flip-card-back-title{
      font-size: 16px;
      font-weight:600
    }
    .flip-card-back-price{
      font-size: 22px;
    }
    .flip-card-back-rate{
      font-size: 13px;
    }
    .back-text-container{
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: space-around;
    }
    .descriptinContainer{
      text-align: start;
      border-bottom-style: solid;
      width: 100%;
    }
    .description-text{
      font-weight: 500;
      
      font-size: 15px;
      left: 25px;
    }
    .flip-card-back-count{
      font-size: 13px;
    }
    .flip-card-back-description{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 8;
      font-size: 12px;
      font-weight: 400;
      overflow: hidden;
      text-align: left;


    }
    .link-Container{
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .buttonSeller {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: var(--color-text);
      background-color: var(--action-primary);
      border-radius: 16px;
      

    }
  }
`;
