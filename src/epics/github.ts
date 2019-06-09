import { Observable } from 'rxjs'
import { Epic } from 'redux-observable'

import { ofAction } from 'typescript-fsa-redux-observable'
// for actions
import { AnyAction } from 'typescript-fsa'
import actions from '../actions/github'
import { ajax } from 'rxjs/ajax'
import { catchError, debounceTime, map, mergeMap } from 'rxjs/operators'

export const fetchRepositories: Epic<AnyAction> = (action$) => action$.pipe(
    ofAction(actions.fetchRepositories.started),
    debounceTime(1000),
    mergeMap((param) =>
        ajax.getJSON(`https://api.github.com/search/repositories?q=+language:javascript+created:%3E2016-10-01&sort=stars&order=desc`).pipe(
            map(data => {
                return actions.fetchRepositories.done({
                    params: param.payload,
                    result: { repositories: data },
                })
            }),
            catchError(error =>
                Observable.of(actions.fetchRepositories.failed({
                    params: param.payload,
                    error: error,
                })),
            ),
        ),
    ),
)
