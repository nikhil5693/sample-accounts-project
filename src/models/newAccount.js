import { getRandomNumber } from '../utils';

const initialState = {
    firstName: '',
    lastName: '',
    accountId: getRandomNumber(),
    accountType: 'Pending',
    type: '',
    number: '',
    date: '26/11/2001',
    balance: '',
    transactions: [],
}

const reducers = {
    setField: (state, { name, value }) => ({ ...state, [name] : value }),
    resetNewAccountsData: () => ({ ...initialState }),
}

export default {
    state: initialState,
    reducers,
}