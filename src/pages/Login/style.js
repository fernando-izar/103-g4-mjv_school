import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #fff;
  padding: 20px;
  color: var(--color-text);

  fieldset {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  a {
    font-size: 60%;
    color: var(--color-text);
  }
`
