import { Observable } from 'rxjs'
import axios from 'axios'
import { ApiBaseUrl } from '../constants/index'
import { Epic } from 'redux-observable'

import { ofAction } from 'typescript-fsa-redux-observable'
// for actions
import { AnyAction, Action, Success } from 'typescript-fsa'
import actions from '../actions/user'

import { delay, mergeMap, catchError, debounceTime } from 'rxjs/operators'

export const userLogin: Epic<AnyAction> = (action$) => action$.pipe(
    ofAction(actions.login.started),
    debounceTime(1000),
    delay(1000),
    mergeMap((param) =>
        Observable.defer(() =>
            Observable.fromPromise(
                axios.get(`${ApiBaseUrl}/${param.payload.id}`, {
                    headers: { Authorization: `test` },
                }),
            ),
        ).map(data => {
            return actions.login.done({
                params: param.payload,
                result: { data: data.data },
            })
        }),
    ),
    catchError(error =>
        Observable.of(actions.login.failed({
            params: this.payload.params,
            error: error,
        })),
    ),
)


export const userLogout: Epic<AnyAction> = (action$) => action$.pipe(
    ofAction(actions.logout.started),
    mergeMap(() =>
        Observable.merge(
            Observable.of(actions.logout.done),
        ),
    ),
    catchError(
        error =>
            Observable.of(actions.logout.failed),
    ),
)

//
// export function userLogin(action$: Observable) {
//     return action$
//         .ofType(ActionTypes.USER_LOGIN_REQUEST)
//         .delay(1000)
//         .mergeMap(param =>
//             Observable.defer(() =>
//                 Observable.fromPromise(
//                     axios.get(`${ApiBaseUrl}/${param.payload.id}`, {
//                         headers: { Authorization: `test` },
//                     }),
//                 ),
//             ).map(data => {
//                 return {
//                     type: ActionTypes.USER_LOGIN_SUCCESS,
//                     payload: { response: data.data },
//                 }
//             }),
//         )
//         .catch(error =>
//             Observable.of({
//                 type: ActionTypes.USER_LOGIN_FAILURE,
//                 payload: { error },
//                 error: true,
//             }),
//         )
// }
//
// export function userLogout(action$) {
//     return action$
//         .ofType(ActionTypes.USER_LOGOUT_REQUEST)
//         .mergeMap(() =>
//             Observable.merge(
//                 Observable.of({ type: ActionTypes.USER_LOGOUT_SUCCESS }),
//             ),
//         )
//         .catch(
//             error =>
//                 Observable.of({
//                     type: ActionTypes.USER_LOGOUT_FAILURE,
//                     payload: { error },
//                     error: true,
//                 }),
//         )
// }