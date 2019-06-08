import React from 'react'
import actions from '../actions/user'
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <input type="button" onClick={() => {
                    dispatch(actions.login.started({ id: '1' }))
                }} value="test"/>
            </div>
        </div>
    )
}

export default Login