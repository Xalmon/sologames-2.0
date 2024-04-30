import React, { Component } from 'react';
import styles from './snake.module.css';

class Snake extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snake: [{ x: 10, y: 10 }],
            food: { x: 15, y: 15 },
            direction: 'RIGHT',
            gameOver: false,
        };
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
        this.canvas = this.canvasRef.current;
        this.ctx = this.canvas.getContext('2d');
        this.interval = setInterval(this.updateGameArea, 100);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
        clearInterval(this.interval);
    }

    handleKeyPress = (event) => {
        const { direction } = this.state;
        switch (event.key) {
            case 'ArrowUp':
                if (direction !== 'DOWN') this.setState({ direction: 'UP' });
                break;
            case 'ArrowDown':
                if (direction !== 'UP') this.setState({ direction: 'DOWN' });
                break;
            case 'ArrowLeft':
                if (direction !== 'RIGHT') this.setState({ direction: 'LEFT' });
                break;
            case 'ArrowRight':
                if (direction !== 'LEFT') this.setState({ direction: 'RIGHT' });
                break;
            default:
                break;
        }
    };

    updateGameArea = () => {
        const { snake, food, direction, gameOver } = this.state;
        if (gameOver) return;

        const newSnake = [...snake];
        const head = { ...newSnake[0] };

        switch (direction) {
            case 'UP':
                head.y -= 1;
                break;
            case 'DOWN':
                head.y += 1;
                break;
            case 'LEFT':
                head.x -= 1;
                break;
            case 'RIGHT':
                head.x += 1;
                break;
            default:
                break;
        }

        newSnake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            const newFood = {
                x: Math.floor(Math.random() * 20),
                y: Math.floor(Math.random() * 20),
            };
            this.setState({ food: newFood });
        } else {
            newSnake.pop();
        }

        if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 || this.checkCollision(newSnake)) {
            this.setState({ gameOver: true });
            clearInterval(this.interval);
        }

        this.setState({ snake: newSnake });
        this.drawGameArea();
    };

    checkCollision = (snake) => {
        const head = snake[0];
        return snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y);
    };

    drawGameArea = () => {
        const { snake, food, gameOver } = this.state;
        const ctx = this.ctx;
        const cellSize = 20;
        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        ctx.fillStyle = '#000000';
        snake.forEach((segment) => {
            ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
        });

        ctx.fillStyle = '#FF0000';
        ctx.fillRect(food.x * cellSize, food.y * cellSize, cellSize, cellSize);

        if (gameOver) {
            ctx.font = '30px Arial';
            ctx.fillStyle = '#000000';
            ctx.fillText('Game Over', canvasWidth / 2 - 80, canvasHeight / 2);
        }
    };

    render() {
        return <canvas ref={this.canvasRef} className={styles.canvas} width={400} height={400} />;
    }
}

export default Snake;
