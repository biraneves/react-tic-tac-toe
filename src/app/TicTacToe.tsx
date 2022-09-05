import { configureStore } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

type CellValue = 'X' | 'O' | '';

interface ITicTacToeState {
    nextPlayer: 'X' | 'O';
    board: CellValue[][];
}

const initialState: ITicTacToeState = {
    nextPlayer: 'X',
    board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ],
};

type ActionPlay = PayloadAction<{ i: number; j: number }, 'play'>;
type ActionReset = Action<'reset'>;

function TicTacToeReducer(
    state = initialState,
    action: ActionPlay | ActionReset,
): ITicTacToeState {
    switch (action.type) {
        case 'play':
            const board = state.board.map((row) => row.map((cell) => cell));
            return { nextPlayer: state.nextPlayer === 'X' ? 'O' : 'X', board };
    }

    return state;
}

const store = configureStore({
    reducer: { ticTacToe: TicTacToeReducer },
});

store.dispatch({});

export function TicTacToe() {
    const state: ITicTacToeState = {
        nextPlayer: 'X',
        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ],
    };

    return (
        <div className="ticTacToe">
            <div>Aguardando jogada de {state.nextPlayer}</div>
            <table>
                <tbody>
                    {state.board.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td key={j}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button>Reiniciar partida</button>
        </div>
    );
}
