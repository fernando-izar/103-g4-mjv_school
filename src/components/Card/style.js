import styled from "styled-components";

export const Container = styled.li`
  background-color: transparent;
  min-width: 300px;
  height: 370px;
  perspective: 1000px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    text-transform: capitalize;
    background: #f4f4f4;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
  }

  :hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    /* background-color: #bbb; */
    color: black;

    img {
      margin: 12px 11px 14px 13px;

      width: 187px;
      border-radius: 5px;
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
