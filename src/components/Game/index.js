import React, { useState } from 'react'
import Board from '../Board'
import { calculateWinner } from '../../winner'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Game() {
    const [history, setHistory] = useState([Array(16).fill(null)]) 
    const [stepNumber, setStepNumber] = useState(0) 
    const [isXNext, setIsXNext] = useState(true) 
    const winner = calculateWinner(history[stepNumber]) 

    function handleClick(i) {
        const timeInHistory = history.slice(0, stepNumber + 1) 
        const current = timeInHistory[stepNumber] 
        const squares = [...current]

        if (winner || squares[i]) return; 
        squares[i] = isXNext ? 'X' : 'O'; 
        setHistory([...timeInHistory, squares]) 
        setStepNumber(timeInHistory.length) 
        setIsXNext(!isXNext)
    }

    const jumpTo = step => {
      
        setStepNumber(step)
        setIsXNext(step % 2 === 0)
    }

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Ir para jogada ${move}` : "Início"
            return (
                <li className='listButtons' key={move}>
                    <button className='buttons' onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    )


    return (
        // <>
        //     <div className="player">
        //         <p>{winner ? 'Vencedor: ' + winner : 'Próximo jogador: ' + (isXNext ? 'X' : 'O')}</p>
        //     </div>
        //     <Board squares={history[stepNumber]} onClick={handleClick} />
        //     <div className="moves">
        //         {renderMoves()}
        //     </div>
        // </>
        <Container fluid={true} className="form_div game_div">
       
        <Row className="main_row game_row">
          <Col sm={10} md={8} lg={6} xl={6} className="input-div">
 
          <div className="player">
                <p>{winner ? 'Vencedor: ' + winner : 'Próximo jogador: ' + (isXNext ? 'X' : 'O')}</p>
            </div>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            {/* <div className="moves">
                {renderMoves()}
            </div> */}
          
          
      
          </Col>
          <Col sm={12} md={4} lg={4} xl={4} className="input-div">
 
 cscww
 
 

 </Col>
          
          
        </Row>
      

  
      
      </Container> 
    )

}

export default Game