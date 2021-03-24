import { init } from '@rematch/core'
import models from './models'

const redux = {
    devtoolOptions: {
        disabled: process.env.NODE_ENV === 'production'
    }
}

const store = init({
    models,
    redux,
})

export default store;