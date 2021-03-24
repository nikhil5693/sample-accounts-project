const initialState = {
    id: '',
    firstName: '',
    lastName: '',
    accounts: [],
}

const reducers = {
    setData: (state, data) => ({ ...state, ...data }),
    resetAccountsData: () => ({ ...initialState }),
}

export default {
    state: initialState,
    reducers,
}