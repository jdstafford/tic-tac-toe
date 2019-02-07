import React from 'react';
import PropTypes from 'prop-types';
import GameBoardRow from './GameBoardRow';
import GameBoardSquare from './GameBoardSquare';

const GameBoard = ({ gridSize, claimSquare, currentPlayerIndex, currentPlayerDetails }) => {

    const rows = [];

    for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
        const squares = [];
        // build game board columns
        for (let colIndex = 0; colIndex < gridSize; colIndex++) {
            let coordinates = {};
            coordinates[rowIndex] = colIndex;
            squares.push(<GameBoardSquare
                key={colIndex}
                currentPlayer={currentPlayerDetails}
                claimSquare={() => claimSquare(coordinates, currentPlayerIndex)}
                owner={null}
            />);
        }

        rows.push(<GameBoardRow key={rowIndex} squares={squares} />);
    }

    return (
        <div className="GameBoard">
            {rows}
        </div>
    );
};

GameBoard.propTypes = {
    gridSize: PropTypes.number.isRequired,
    claimSquare: PropTypes.func.isRequired,
    currentPlayerIndex: PropTypes.number.isRequired,
    currentPlayerDetails: PropTypes.object.isRequired
};

export default GameBoard;
