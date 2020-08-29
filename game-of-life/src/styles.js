import styled from 'styled-components';

export const GameTitle = styled.h1`
    text-align: center;
    font-size: 3.5rem;
    padding: 3rem;
    width: 100%;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const MainWrapper = styled.main`
    max-width: 100%;
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
        justify-content:center;
	}
`;

export const GameContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
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
    width: 95%;
    font-size: 1.6rem;
    padding: 2rem;
    margin: 5rem auto;
    text-align: justify;
    line-height: 1.6;
`;

export const SectionTitle = styled.h2`
    text-align: center;
    font-size: 1.6rem;
    padding: 2rem 1rem;
    letter-spacing: 2px;
`;

export const GridWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 900px) {
        align-items: baseline;
        width: 55%;
	}
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
    @media (min-width: 0px) {
        flex-direction: row;
        width: 100%;
   
`;

export const PresetsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 900px) {
        width: 20%;
`;

export const Game = styled.div`
    width: 30rem;
    height: 30rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1.45rem, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(1.45rem, 1fr));
    margin: 0.5rem auto;
    border: 1px solid #D1C6C6;
    @media (min-width: 900px) {
        width: 50rem;
        height: 50rem;
        grid-template-columns: repeat(auto-fit, minmax(2.5rem, 1fr));
        grid-template-rows: repeat(auto-fit, minmax(2.5rem, 1fr));
`;

export const Cell = styled.div`
    width: 1.45rem;
    height: 1.45rem;
    border: 1px solid #D1C6C6;
    @media (min-width: 900px) {
        width: 2.5rem;
        height: 2.5rem;
    }
`;

export const Button = styled.button`
    border-radius: 5px;
    border: none; 
    padding: 1.5rem;
    width: 9rem;    
    cursor: pointer;
    background-color: transparent;
    margin-right: 2rem;
    box-shadow: 0px 2px 4px rgba(0,0,0,.1);
    transition: box-shadow 1s ;
    &:hover {
        box-shadow: 0px 2px 4px rgba(0,0,0,.5);
    &:active {  
        outline: none;
        }
  }
`;

export const Preset = styled.div``;
   
export const ListElement = styled.li`
    font-size: 1.5rem;
    padding: 0 2rem 2rem 0;
`;

export const List = styled.ul`
    text-align: justify;
    margin: 0 auto;
    list-style: none;
`;

export const ColorPickerWrapper = styled.div`
    margin: 3rem auto;
`;

export const Form = styled.form`
    text-align: center;
`;

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid gray;
    margin-right: 2rem;
    transition: box-shadow .5s;
    &:focus {
        outline: none;
        // border-bottom: 1px solid gray;
        box-shadow: 0px 1px 0px rgba(0,0,0,.5)
    }
`;

export const SubmitButton = styled.button`
    border-radius: 5px;
    border: none; 
    padding: 1.2rem;
    // width: 4rem;    
    cursor: pointer;
    background-color: transparent;
    // margin-right: 2rem;
    box-shadow: 0px 2px 4px rgba(0,0,0,.1);
    transition: box-shadow 1s ;
    &:hover {
    box-shadow: 0px 2px 4px rgba(0,0,0,.5);
  }
`;


