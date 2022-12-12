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
  font-family: 'Poppins';
  
  .containerButton{
    display: flex;
    margin-top: 25px;
    flex-direction: column;
    height: 500px;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  button {
    height: 50px;
    color: white;
    border:none;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px
    
  }

  


  .svgContainer{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
  }
`;


export const SvgLogo = styled.img`
 
  width: 50%;
`;
