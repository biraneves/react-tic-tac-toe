import { useAppDispatch, useAppSelector } from './store';

export function TicTacToe() {
    const state = useAppSelector((state) => state.ticTacToe);
    const dispatch = useAppDispatch();

    return (
        <div className="ticTacToe">
            <div>Aguardando jogada de {state.nextPlayer}</div>
            <table>
                <tbody>
                    {state.board.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td
                                    onClick={() =>
                                        dispatch({
                                            type: 'play',
                                            payload: { i, j },
                                        })
                                    }
                                    key={j}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reiniciar partida
            </button>
        </div>
    );
}
