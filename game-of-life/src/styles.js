import styled from 'styled-components';

export const GameTitle = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    padding: 3rem;
`;

export const MainWrapper = styled.main`
    width: 95%;
    margin: 2rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: columns;
    border-radius: 5px;
    background-color: white;
    box-shadow: 2.5px 5px 4px #DCDCDC;
`;

export const Rules = styled.section`
    width: 30%;
    font-size: 2rem;
`;

export const About = styled.section`
    width: 100%;
    font-size: 1.6rem;
    padding: 2rem;
`;

export const SectionTitle = styled.h2`
    text-align: center;
    font-size: 2rem;
`;

export const GameWrapper = styled.div`
    border: 1px solid green;
    width: 68%;
    display: flex;
`;

export const GameContainer = styled.div`
    border: 1px solid green;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 3rem;
`;

export const PresetsContainer = styled.div`
    border: 1px solid green; 
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Game = styled.div`
    display: grid;
    grid-template-columns: repeat(20, 25px);
    margin: 0.5rem auto;
`;

export const Button = styled.button`
    border-radius: 5px;
    padding: 1.5rem;
    width: 8rem;    
    cursor: pointer;
    background-color: transparent;
`;

export const Preset = styled.div`
border: 1px solid red;`

