const initialState = {
    transactionIds: [],
    transactions: [],
}

const reducers = {
    setField: (state, { name, value }) => ({ ...state, [name] : value }),
    resetTransactionsData: () => ({ ...initialState }),
}

export default {
    state: initialState,
    reducers,
}