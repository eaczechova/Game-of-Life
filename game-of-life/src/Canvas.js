import React, { useState, useEffect, useRef} from 'react';
import './App.css';


function Canvas(props) {
    let ref = useRef();
    const drawCanvas = () => {
        let canvas = ref.current;
        let context = canvas.getContext('2d');
        
        // props.grid.map((col, i) => col.map((row, j) => {
        //     context.beginPath();
        //     context.rect(col * 10, row * 10, 10, 10);
        //     context.fillStyl;
        // }));
    }
    drawCanvas()
    return(
        <canvas
            ref={ref}
            style={{ width: '100px', height: '100px' }}
        />
    )
}


export default Canvas
