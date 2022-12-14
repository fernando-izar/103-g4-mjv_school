import { keyframes } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: var(--color-secondary);
  font-family: "Poppins";
  .product-not-found {
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 100px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .dinos{
      width: 650px;
    }
    .product-not-found-paragraph {
      margin-bottom: 92px;
      font-size: 100px;
    }
    .button-container{
      width: 400px;
      margin-bottom: 50px;
    }
    
  }

  .main-content {
    width: 85%;
    height: 80vh;

    .product-not-found-link {
      width: 115px;
      height: 25px;
      background: var(--action-primary);
      padding: 10px;
      text-align: center;
      border-radius: 5px;
      color: white;
      line-height: 25px;
      margin-left: 20px;
    }
  }
  .bodyContainer .descriptionContainer {
    display: flex;
    height: 65vh;
    margin: 20px;
    padding: 15px;
    justify-content: space-between;
    background-color: #fff;
    border: solid 1px #d9d9d9;
    border-radius: 5px;
  }
  .cardProduct {
    display: flex;
    flex-direction: row;
    width: 25%;
    height: 100%;
    align-items: center;
    background-color: #fff;
    border: solid 1px #d9d9d9;
    border-radius: 5px;
  }
  .bodyContainer .descriptionContainer .cardProduct .imageContainer img {
    width: 75%;
    :nth-child(even) {
      margin-top: -2px;
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
  .imageContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .blurDiv {
      position: sticky(top);
      margin-top: -8%;
      width: 100%;
      color: #fff;
      height: 45px;
      background-color: #fff;
      filter: blur(9px);
    }
  }

  .textContainer {
    width: 35%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    padding: 10px;
    h2 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 9;
      font-size: 15px;
      font-weight: 400;
      overflow: hidden;
      text-align: center;
    }
  }
  .buyContainer {
    width: 25%;
    height: 75%;
    border: solid 1px #d9d9d9;
    border-radius: 5px;
    padding: 20px;
    .buyArea {
      display: flex;
      flex-direction: column;
      border-radius: 5px;
      padding: 15px;
      border: solid 1px #d9d9d9;
      text-align: center;
      justify-content: space-around;
      height: 100%;
      align-items: center;
    }
    .buttonContainer {
      height: 75px;
      width: 100%;
      gap: 20px;
      max-width: 100vh;

      border-radius: 2px;
      border: 1px solid #414141;
      color: black;
      font-weight: 600;
      font-family: "Poppins";
      font-size: 13px;
      text-align: center;
    }
  }
  .loadContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100px;
      height: 100px;
    }
  }
  h1 {
    font-size: 35px;
  }
  h2 {
    font-size: 20px;
    font-weight: 300;
  }
  h3 {
    font-size: 15px;
  }
  h4 {
    font-size: 12px;
    font-weight: 400;
  }
`;
