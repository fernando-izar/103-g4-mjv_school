import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
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
  font-family: 'Poppins';

  .svgContainer{
    margin-top: 25px;
    display: flex;
    justify-content: center;
  }

  .marketingContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    img{
      width: 95%;
    }
    a{
      color: white;
      position: absolute;
      bottom: 145px;
    }
  }
`;


export const SvgLogo = styled.img`
 
  width: 50%;
`;