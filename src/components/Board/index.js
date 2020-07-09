import React from 'react';
import Square from '../Square'

function Board({ squares, onClick }) {
    const style = {
        border: '4px solid rgb(0, 94, 156)',
        borderRadius: '10px',
        width: '400px',
        height: '400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplate: 'repeat(4, 1fr) / repeat(4, 1fr)'
    }
    return (
        <div style={style}>
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    )
}

export default Board