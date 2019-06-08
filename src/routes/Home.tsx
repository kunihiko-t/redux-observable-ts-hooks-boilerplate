import React, { useEffect } from 'react'
import { push } from 'connected-react-router'
import { History } from 'history'
import { useDispatch } from 'react-redux'
import actions from '../actions/user'

const Home = ({ history }: { history: History }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        //Mount
        console.log('mount')
        return () => {
            //Unmount
            dispatch(actions.login.started({ id: '1' }))
            console.log('unmount')
        }
    }, [])
    return (
        <div>
            <h1>Home</h1>
            <div
                onClick={() => {
                    dispatch(push('/'))
                }}
            >
                routing test
            </div>
        </div>
    )
}

export default Home