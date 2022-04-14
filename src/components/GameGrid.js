import { useEffect, useState } from 'react';
import '../styles/GameGrid.css';
import Cell from './Cell';
import gameOfLife from '../gameOfLife';

export default function GameGrid() {

    const [cells, setCells] = useState([]);

    useEffect(() => {
        const newCells = [];
        for (let i = 0; i < 10; i++) {
            newCells.push([]);
            for (let j = 0; j < 10; j++) {
                newCells[i].push(Math.random() > 0.5 ? 1 : 0);
            }
        }
        setCells(newCells);
    }, []);

    useEffect(() => {
        if (cells.length === 0) return;

        setTimeout(() => {
            const newCells = gameOfLife(cells);
            setCells(newCells);
        }, 1000);
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
