import React, { Component } from 'react';
import styles from './tetris.module.css';

class Tetris extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array.from({ length: 20 }, () => Array(10).fill(null)),
            currentPiece: this.getRandomPiece(),
            currentPosition: { x: 4, y: 0 },
            gameover: false,
        };
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
        this.canvas = this.canvasRef.current;
        this.ctx = this.canvas.getContext('2d');
        this.interval = setInterval(this.updateGameArea, 500);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
        clearInterval(this.interval);
    }

    handleKeyPress = (event) => {
        const { currentPosition } = this.state;
        switch (event.key) {
            case 'ArrowUp':
                this.rotatePiece();
                break;
            case 'ArrowDown':
                this.moveDown();
                break;
            case 'ArrowLeft':
                this.moveLeft();
                break;
            case 'ArrowRight':
                this.moveRight();
                break;
            default:
                break;
        }
    };

    getRandomPiece = () => {
        const pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
        const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
        return randomPiece;
    };

    rotatePiece = () => {
        const { currentPiece, currentPosition, board } = this.state;
        const newBoard = board.map((row) => [...row]);
        const newPosition = { ...currentPosition };    
        this.setState({ board: newBoard, currentPosition: newPosition });
    };

    moveDown = () => {
        const { currentPosition } = this.state;
        const newPosition = { ...currentPosition };
        newPosition.row += 1;
        this.setState({ currentPosition: newPosition });
    };

    moveLeft = () => {
        const { currentPosition } = this.state;
        const newPosition = { ...currentPosition };
        newPosition.col -= 1
        this.setState({ currentPosition: newPosition });
    };

    moveRight = () => {
        const { currentPosition } = this.state;
        const newPosition = { ...currentPosition };
        newPosition.col += 1
        this.setState({ currentPosition: newPosition });
    };

    updateGameArea = () => {
        const { currentPosition } = this.state;
        const newPosition = { ...currentPosition };
        this.setState({ currentPosition: newPosition });
    };

    drawGameArea = () => {
        const { gameArea } = this.state;
        return (
            <div className="game-area">
                {gameArea.map((row, rowIndex) => (
                    <div key={`row-${rowIndex}`} className="game-row">
                        {row.map((cell, colIndex) => (
                            <div key={`cell-${rowIndex}-${colIndex}`} className={`game-cell ${cell}`} />
                        ))}
                    </div>
                ))}
            </div>
        );
    };
    
    render() {
        return <canvas ref={this.canvasRef} className={styles.canvas} width={200} height={400} />;
    }
}

export default Tetris;
