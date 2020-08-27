import styled from 'styled-components';

export const GameTitle = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    padding: 3rem;
    width: 100%;
`;

export const MainWrapper = styled.main`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
    border-radius: 5px;
    background-color: white;
    box-shadow: 2.5px 5px 4px #DCDCDC;
    @media (min-width: 900px) {
       flex-direction: column;
        width: 95%; 
        margin: 0 auto;
	}
`;

export const GameContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid green;
    @media (min-width: 900px) {
       justify-content: space-between;
	}
`;

export const Rules = styled.section`
    width: 100%;
    font-size: 1.6rem;
    @media (min-width: 900px) {
        width: 20%;
	}
`;

export const About = styled.section`
    width: 80%;
    font-size: 1.6rem;
    padding: 1rem;
    margin: 5rem auto;
`;

export const SectionTitle = styled.h2`
    text-align: center;
    font-size: 2rem;
`;

export const GridWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 1px solid blue;
    @media (min-width: 900px) {
        flex-direction: column;
        align-items: baseline;
        width: 55%;
	}
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 3rem;
    flex-direction: column;
    @media (min-width: 900px) {
        flex-direction: row;
   
`;

export const PresetsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 900px) {
        width: 20%
`;

export const Game = styled.div`
    width: 500px;
    height: 500px;
    display: grid;
    overflow-x: hidden;
    grid-template-columns: repeat(20, 2.5rem);
    margin: 0.5rem auto;
`;

export const Cell = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid #D1C6C6;
`;

export const Button = styled.button`
    border-radius: 5px;
    padding: 1.5rem;
    width: 9rem;    
    cursor: pointer;
    background-color: transparent;
    margin-right: 2rem;
`;

export const Preset = styled.div``;
   
export const ListElement = styled.li`
    font-size: 1.5rem;
    padding: 1rem;
`;

export const List = styled.ul`
    padding: 0;
    text-align: justify;;
    width: 80%;
    margin: 0 auto;
   
`;

export const ColorPickerWrapper = styled.div`
    margin: 3rem auto;
`;

export const Form = styled.form`
    text-align: center;
`;


