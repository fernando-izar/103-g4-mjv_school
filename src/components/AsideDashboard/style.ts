import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
  background: linear-gradient(
    0deg,
    var(--Color-primary) -17.71%,
    var(--Color-primary-gradient) 172.1%
  );
  width: 15%;
  height: 1080px;
  background-color: var(--color-primary);

  button {
    height: 50px;
  }
`;

export const SvgLogo = styled.img`
  margin-top: 50px;
  margin: 25px;
  width: 50%;
  height: 155px;
  filter: invert(99%) sepia(87%) saturate(2%) hue-rotate(34deg) brightness(111%)
    contrast(100%);
`;
