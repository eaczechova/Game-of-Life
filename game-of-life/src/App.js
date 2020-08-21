import React, { useState, useEffect, useRef} from 'react';
import './App.css';
import {
  GameTitle,
  MainWrapper,
  Rules,
  About,
  SectionTitle,
  GameWrapper,
  GameContainer,
  PresetsContainer,
  ButtonsContainer,
  Game,
  Button,
  Preset
} from './styles';

function App() {
  
  const [grid, setGrid] = useState(() => {
    const grid = new Array(20).fill(new Array(20).fill(0)).map(col => col.map(row => row = Math.floor(Math.random() * 2)));
    return grid
  });

  const changeCell = (rows, col) =>{
    const newGrid = [...grid];
    newGrid[rows][col] = grid[rows][col] ? 0 : 1;
    setGrid(newGrid);
  }

  const clearGrid = () => {
    const emptyGrid = new Array(20).fill(new Array(20).fill(0)).map(col => col.map(row => row = 0));
    setGrid(emptyGrid);
  }

  return (
    <>
      <GameTitle>Conway's "Game of Life"</GameTitle>
      <MainWrapper>
        <GameWrapper>
          <GameContainer>
            <SectionTitle>Generation: #</SectionTitle>
            <Game>
              {grid.map((rows, r) =>
                rows.map((col, c) =>
                  <div
                    onClick={(e) => changeCell(r, c)}
                    // {
                    // const newGrid = [...grid];
                    // if ([rows][col] == 0) {
                    //   console.log("enter")
                    //   newGrid[rows][col] = 1
                    // }

                    // }}
                    style={{
                      width: 25,
                      height: 25,
                      background: [rows][col] ? "white" : "black",
                      border: "1px solid black"
                    }}/>
                  )
              )}
            </Game>
            <ButtonsContainer>
              <Button>Play</Button>
              <Button>Pause</Button>
              <Button onClick={() => clearGrid()}>Stop</Button>
            </ButtonsContainer>
          </GameContainer>
          <PresetsContainer>
            <Preset><div>Box</div><button>Preset 1</button></Preset>
            <Preset><div></div><button>Preset 2</button></Preset>
            <Preset><div></div><button>Preset 3</button></Preset>
            <Preset><div></div><button>Preset 4</button></Preset>
          </PresetsContainer>
        </GameWrapper>
        <Rules>
          <SectionTitle>Rules</SectionTitle>
          <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </Rules>
        <About> 
          <SectionTitle>About</SectionTitle>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum.</p>
            </div>
        </About>
      </MainWrapper>
    </>
  );
}
export default App;
