import { Action, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export type CellValue = 'X' | 'O' | '';

export interface ITicTacToeState {
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
            const { i, j } = action.payload;
            const board = state.board.map((row) => row.map((cell) => cell));
            board[i][j] = state.nextPlayer;
            return { nextPlayer: state.nextPlayer === 'X' ? 'O' : 'X', board };
    }

    return state;
}

export const store = configureStore({
    reducer: { ticTacToe: TicTacToeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
