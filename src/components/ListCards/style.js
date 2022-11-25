import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 1rem;
    overflow: auto;

    padding: 0 0rem 3rem 1rem;
    margin: 0;
    height: 100%;
  }
`;
