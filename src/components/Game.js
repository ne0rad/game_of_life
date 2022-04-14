import { useEffect, useState } from 'react';
import '../styles/Game.css';
import Cell from './Cell';
import gameOfLife from '../gameOfLife';

export default function Game() {

    const [cells, setCells] = useState([]);

    useEffect(() => {
        const newCells = [];
        for (let i = 0; i < 50; i++) {
            newCells.push([]);
            for (let j = 0; j < 50; j++) {
                newCells[i].push(Math.random() > 0.9 ? 1 : 0);
            }
        }
        setCells(gameOfLife(newCells));
    }, []);

    useEffect(() => {
        if (cells.length === 0) return;

        setTimeout(() => {
            const newCells = gameOfLife(cells);
            setCells(newCells);
        }, 250);
    }, [cells]);
    return (
        <div id="grid">
            {cells.map((cellRow, i) =>
                cellRow.map((cell, j) => {
                    return <Cell key={i + '-' + j} alive={cell === 1 ? true : false} />
                })
            )}
        </div>
    );
}
