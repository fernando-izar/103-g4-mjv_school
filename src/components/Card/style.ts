import styled from "styled-components";

export const Container = styled.li`
  background-color: transparent;
  min-width: 330px;
  height: 400px;
  perspective: 1000px;
  margin-top: 30px;




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
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
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

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    button {
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 19px;
    }
  }
`;
