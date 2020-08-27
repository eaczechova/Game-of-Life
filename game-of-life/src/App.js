import React, { useState, useEffect, useRef} from 'react';
import { ChromePicker } from 'react-color';
import Grid from './Grid.js';
import './App.css';
import {
  GameTitle,
  MainWrapper,
  Rules,
  About,
  SectionTitle,
  List,
  GridWrapper,
  GameContainer,
  ListElement,
  PresetsContainer,
  ButtonsContainer,
  Button,
  ColorPickerWrapper,
  Form
} from './styles';

function App() {
  const [tempSpeed, setTempSpeed] = useState(10);
  const [speed, setSpeed] = useState(10);
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(20);
  let [generation, setGeneration] = useState(0);
  const [color, setColor] = useState('#000');
  const [ownLayout, setOwnLayout] = useState(false);

  const [grid, setGrid] = useState(() => {
    // const grid = new Array(20).fill(new Array(20).fill(0)).map(col => col.map(row => row = Math.floor(Math.random() * 2)));
    const grid = new Array(rows).fill(new Array(cols).fill(0)).map(col => col.map(row => row = 0));
    return grid
  });

  const intervalRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Fills grid cells with random values of 0 or 1
  // Run the function on component mount

  const fillGrid = () => {
    let filledGrid = [...grid];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        filledGrid[i][j] = Math.floor(Math.random() * 2);
      }
    }

    // for (let i = 0; i < rows; i+=2) {
    //   for (let j = 0; j < cols; j++) {
    //     filledGrid[i][j] = 1;
    //   }
    // }
    setGrid(filledGrid);
  }

  const handleChangeComplete = (color) => {
    setColor( color.hex );
  };

  const preset1 = () => {
    let filledGrid = [...grid];
    for (let i = 0; i < rows; i += 2) {
      for (let j = 0; j < cols; j++) {
        filledGrid[i][j] = 1;
      }
    }
    setGrid(filledGrid);
  }

  const preset2 = () => {
    let filledGrid = [...grid];
    for (let i = 0; i < rows; i ++) {
      for (let j = 0; j < cols; j++) {
        filledGrid[i][j % 2] = Math.floor(Math.random() * 2);
      }
    }
    setGrid(filledGrid);
  }

  // Change state of selected grid cell; 

  const changeSelectedCell = (rows, col) =>{
    const newGrid = [...grid];
    if (!isPlaying) {
      newGrid[rows][col] = grid[rows][col] ? 0 : 1;
      setGrid(newGrid);
      setOwnLayout(true);
    }
  };
  
  const stopGame = () => {
    const emptyGrid = new Array(rows).fill(new Array(cols).fill(0)).map(col => col.map(row => row = 0));
    setIsPlaying(false);
    setGrid(emptyGrid);
    setGeneration(0);
    setSpeed(1000);
    setOwnLayout(false);
  };


  const toggle = () => {
    setIsPlaying(!isPlaying);
  }

  //\\  row, col //\\
  // 1. row -1, col -1
  // 2. row -1, col
  // 3. row - 1, col +1
  // 4. row, col -1,
  // 0. row, col
  // 5. row, col +1,
  // 6. row +1, col -1
  // 7.  row +1, col
  // 8.  row +1, col +1

  const gridUpdate = () => {
    const newGrid = [...grid];
    
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        const cell = grid[row][col]; // value of cell 0 or 1
        let neighbourCounter = 0;
          // Iterating over 8 neighbouring cells
          for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
              // To avoid couting cell itself
              if (!(i === 0 && j === 0)) {
                const cellRow = row + i;
                const cellCol = col + j;
                // To stay within the grid
                if (cellRow > 0 && cellRow < grid.length && cellCol > 0 && cellCol < grid.length) {
                  neighbourCounter += grid[cellRow][cellCol];
                }
              }
            }
          }
     
          if (cell === 0 && neighbourCounter === 3) {
            newGrid[row][col] = 1;
          } else if ((cell === 1 && neighbourCounter > 3) || (cell === 1 && neighbourCounter < 2)) {
            newGrid[row][col] = 0;
          }
      }
    }
    setGrid(newGrid);
    setGeneration(generation++);
  }

  useEffect(() => {
    if (isPlaying && generation === 0) {
      if(ownLayout) {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(gridUpdate, speed);
      } else {
      fillGrid();
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(gridUpdate, speed);
      }
    } 
    else if (isPlaying && generation > 0) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(gridUpdate, speed);
    } else if (!isPlaying) {
      clearInterval(intervalRef.current);
    } 
  }, [isPlaying, speed]);

  const handleSpeedChange = (e) => {
    setTempSpeed(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSpeed(tempSpeed);
  }
  console.log("tempSpeed", grid);

  return (
    <>
      <GameTitle>Conway's "Game of Life"</GameTitle>
      <MainWrapper>
       
        <GameContainer>
          <SectionTitle style={{width: '100%'}}>Generation # {generation}</SectionTitle>
          <GridWrapper>
            <Grid grid={grid} changeSelectedCell={changeSelectedCell} color={color}/>
            <ButtonsContainer>
              <Button onClick={toggle}>{isPlaying ? 'Pause' : 'Start'}</Button>
              <Button onClick={stopGame}>Stop</Button>
            </ButtonsContainer>
          </GridWrapper>
          <PresetsContainer>
            <SectionTitle>Presets</SectionTitle>
            <ButtonsContainer>
              <Button onClick={preset1}>Preset 1</Button>
              <Button onClick={preset2}>Preset 2</Button>
            </ButtonsContainer>
            <SectionTitle>Settings</SectionTitle>
            <Form onSubmit={onFormSubmit}>
              <input value={tempSpeed} onChange={handleSpeedChange} /><button disabled={isPlaying ? "true" : ""}>Ok</button></Form>
            <ColorPickerWrapper>
              <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
            </ColorPickerWrapper>
          </PresetsContainer>
          <Rules>
            <SectionTitle>Rules</SectionTitle>
            <List>
              <ListElement>Any live cell with fewer than two live neighbors dies</ListElement>
              <ListElement>Any live cell with two or three live neighbors lives on to the next generation.</ListElement>
              <ListElement>Any live cell with more than three live neighbors dies, as if by overpopulation.</ListElement>
              <ListElement>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</ListElement>
            </List>
          </Rules>
        </GameContainer>
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
