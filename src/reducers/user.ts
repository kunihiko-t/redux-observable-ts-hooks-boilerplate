import immutable from 'immutability-helper'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import actions from '../actions/user'

export const userState = {
    isAuthenticated: false,
    status: 'idle',
}

export default {
    user: reducerWithInitialState(userState)
        .case(actions.login.started, (state, payload) => {
            return immutable(state, {
                status: { $set: 'running' },
            })
        })
        .case(actions.login.done, (state, payload) => {
            return immutable(state, {
                status: { $set: 'idle' },
                isAuthenticated: { $set: true },
            })
        })
        .case(actions.logout.started, (state, payload) => {
            return immutable(state, {
                status: { $set: 'running' },
            })
        })
        .case(actions.logout.done, (state, payload) => {
            return immutable(state, {
                status: { $set: 'idle' },
                isAuthenticated: { $set: false },
            })
        }),
}
