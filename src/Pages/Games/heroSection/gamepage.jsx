import React from 'react';
import styles from './gamepage.module.css';

const GamesPage = () => {
  return (
    <div className={styles.container}>
      <h1>Choose a Game</h1>
      <ul className={styles.gamesList}>
        <li>
          <a href="/chess">Chess</a>
        </li>
        <li>
          <a href="/pong">Pong</a>
        </li>
        <li>
          <a href="/snake">Snake</a>
        </li>
        <li>
          <a href="/tetris">Tetris</a>
        </li>
        <li>
          <a href="/tictactoe">Tic Tac Toe</a>
        </li>
      </ul>
    </div>
  );
};

export default GamesPage;
