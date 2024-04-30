import React, { Component } from 'react';
import styles from './pong.module.css';

class Pong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ballX: 50,
            ballY: 50,
            ballSpeedX: 3,
            ballSpeedY: 3,
            paddleLeftY: 100,
            paddleRightY: 100,
        };
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        this.canvas = this.canvasRef.current;
        this.ctx = this.canvas.getContext('2d');
        this.interval = setInterval(this.updateGameArea, 20);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateGameArea = () => {
        const { ballX, ballY, ballSpeedX, ballSpeedY, paddleLeftY, paddleRightY } = this.state;
        const canvas = this.canvas;
        const ctx = this.ctx;
        const ballRadius = 10;
        const paddleWidth = 10;
        const paddleHeight = 100;
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = '#000000';
        ctx.fillRect(10, paddleLeftY, paddleWidth, paddleHeight);

        ctx.fillStyle = '#000000';
        ctx.fillRect(canvasWidth - paddleWidth - 10, paddleRightY, paddleWidth, paddleHeight);

        if (ballY + ballSpeedY > canvasHeight - ballRadius || ballY + ballSpeedY < ballRadius) {
            this.setState({ ballSpeedY: -ballSpeedY });
        }
        if (
            ballX + ballSpeedX > canvasWidth - ballRadius ||
            (ballX + ballSpeedX < paddleWidth + 20 && ballY > paddleLeftY && ballY < paddleLeftY + paddleHeight) ||
            (ballX + ballSpeedX > canvasWidth - paddleWidth - 20 &&
                ballY > paddleRightY &&
                ballY < paddleRightY + paddleHeight)
        ) {
            this.setState({ ballSpeedX: -ballSpeedX });
        }

        this.setState((prevState) => ({
            ballX: prevState.ballX + ballSpeedX,
            ballY: prevState.ballY + ballSpeedY,
        }));
    };

    handleMouseMove = (event) => {
        const canvas = this.canvas;
        const rect = canvas.getBoundingClientRect();
        const mouseY = event.clientY - rect.top;
        this.setState({ paddleLeftY: mouseY - 50 });
    };

    render() {
        return (
            <div>
                <canvas
                    ref={this.canvasRef}
                    className={styles.canvas}
                    width={600}
                    height={400}
                    onMouseMove={this.handleMouseMove}
                />
            </div>
        );
    }
}

export default Pong;
