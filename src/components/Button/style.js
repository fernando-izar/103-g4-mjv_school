import styled from "styled-components";

export const Containerbutton = styled.div`
    
    height: 50px;
    width: fit-content;

    display: flex;
    align-self: center;

    padding-left: 10%;
    padding-right: 10%;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    color: var(--color-text);
    font-family: 'Poppins';

    :nth-child(2){
        margin-left: 20%;
    }

    a{
        
        width: fit-content;
        
        display: flex;
        align-items: center;

        text-decoration: none;
        font-size: 15px;
        color: var(--color-text);

    }`
;

