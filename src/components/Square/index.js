import React from 'react'

function Square({ value, onClick }) {
    const style = {
        fontSize: '30px',
        backgroundColor: '#fff',
        border: '10px solid #84A4FC',
        fontWeight: '800',
        cursor: 'pointer',
        outline: 'none',
        borderRadius:'50%'
    }

   
    style.color = value === 'X' ? '#ff0000' : 'darkblue'

    return (
        <button style={style} onClick={onClick}>{value}</button>
    )

}

export default Square