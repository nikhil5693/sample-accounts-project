import send from '../api';

const initialState = {
    userName: '',
    password: '',
}

const reducers = {
    setField: (state, { name, value }) => ({ ...state, [name]: value }),
    resetLoginData: () => ({ ...initialState }),
}

const effects = ({ login: { setLoggedIn } }) => ({
    async handleLogin(e, rootState) {
        e.preventDefault();
        const res = send({
            url: '/login',
            method: 'POST',
            body: { ...rootState.login },
        })

        return res;
    }
})

export default {
    state: initialState,
    reducers,
    effects,
}