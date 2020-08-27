import React from 'react';
import {
    Game,
    Cell
} from './styles';

const Grid = (props) => {
    return(
            <Game>
                {props.grid.map((rows, r) =>
                    rows.map((col, c) =>
                        <Cell key={`${r}-${c}`}
                            onClick={(e) => props.changeSelectedCell(r, c)}
                            style={{
                                background: [rows][col] ? "white" : props.color,
                            }}></Cell>
                    )
                )}
            </Game>
        
    )
}

export default Grid;