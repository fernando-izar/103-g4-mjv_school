import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  justify-content: center;
  background: linear-gradient(
    0deg,
    var(--Color-primary) -17.71%,
    var(--Color-primary-gradient) 172.1%
  );
  width: 15%;
  height: 100vh;
  background-color: #1E1E1E;
  border: 1px solid #1a2534;

`
export const SvgLogo = styled.img`
  margin-top: 50px;
  margin: 25px;
  width: 50%; 
  height: 155px;
  filter: invert(99%) sepia(87%) saturate(2%) hue-rotate(34deg) brightness(111%) contrast(100%);
`