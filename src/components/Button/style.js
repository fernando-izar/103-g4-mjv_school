import styled from "styled-components";

export const Containerbutton = styled.div`
    
    width: 85px;
    height: 50px;
    
    display: flex;
    justify-content: center;


    padding-left: 30%;
    padding-right: 30%;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    color: var(--color-text);
    font-family: 'Poppins';

    :nth-child(2){
        margin-left: 20%;
    }

    a{
        
        display: flex;
        position: absolute;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        width: 100px;
        height: 50px;

        text-decoration: none;
        font-size: 15px;
        color: var(--color-text);

    }`
;

