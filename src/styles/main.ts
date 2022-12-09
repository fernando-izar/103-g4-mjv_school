import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    max-width: 1080px;
    margin: auto;
    background-color: var(--color-secondary);
    img {
        max-width: 200px;
        margin-bottom: 56px;
    }
`;