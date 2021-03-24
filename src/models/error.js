const initialState = {
    hasError: false,
    error: '',
}

const reducers = {
    setField: (state, { name, value }) => ({ ...state, [name] : value }),
}

export default {
    state: initialState,
    reducers,
}