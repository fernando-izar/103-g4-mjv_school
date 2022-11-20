import styled from 'styled-components'

export const Containerbutton = styled.div`
  width: auto;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 30%;
  padding-right: 30%;

  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  color: var(--color-text);
  font-family: 'Poppins';

  :nth-child(2) {
    margin-left: 30%;
  }
`
