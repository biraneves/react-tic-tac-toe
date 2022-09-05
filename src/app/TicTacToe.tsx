import PayloadAction from 'react-redux';

type CellValue = 'X' | 'O' | '';

interface ITicTacToeState {
    nextPlayer: 'X' | 'O';
    board: CellValue[][];
}

const initialState: ITicTacToeState = {
    nextPlayer: 'X',
    board: [
        ['', '', ''],
        ['', '', 'X'],
        ['', 'O', ''],
    ],
};

type ActionPlay = PayloadAction<{ i: number; j: number }>;

function TicTacToeReducer(state = initialState, action): ITicTacToeState {}

export function TicTacToe() {
    const state: ITicTacToeState = {
        nextPlayer: 'X',
        board: [
            ['', '', ''],
            ['', '', 'X'],
            ['', 'O', ''],
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
