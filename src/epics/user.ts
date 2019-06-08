import { Observable } from 'rxjs'
import { Epic } from 'redux-observable'

import { ofAction } from 'typescript-fsa-redux-observable'
// for actions
import { AnyAction } from 'typescript-fsa'
import actions from '../actions/user'
import { ajax } from 'rxjs/ajax'
import { catchError, debounceTime, delay, map, mergeMap } from 'rxjs/operators'

export const userLogin: Epic<AnyAction> = (action$) => action$.pipe(
    ofAction(actions.login.started),
    debounceTime(1000),
    delay(1000),
    mergeMap((param) =>
        ajax.getJSON(`https://api.github.com/search/repositories?q=+language:javascript+created:%3E2016-10-01&sort=stars&order=desc`).pipe(
            map(data => {
                return actions.login.done({
                    params: param.payload,
                    result: { data: data },
                })
            }),
            catchError(error =>
                Observable.of(actions.login.failed({
                    params: param.payload,
                    error: error,
                })),
            ),
        ),
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
