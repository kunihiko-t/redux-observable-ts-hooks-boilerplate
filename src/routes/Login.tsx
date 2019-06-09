import React from 'react'
import actions from '../actions/user'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import CenterLoader from '../components/CenterLoader'

const Login = () => {
    const user = useSelector((state: any) => state.user)
    const isLoading = user.status === 'running' ? true : false
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <Button onClick={() => {
                    dispatch(actions.login.started({ id: '1' }))
                }} disabled={isLoading}>
                    Login
                </Button>
                <CenterLoader isLoading={isLoading}/>
            </div>
        </div>
    )
}

export default Login