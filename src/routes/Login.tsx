import React from 'react'
import actions from 'actions/user'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Header } from 'semantic-ui-react'
import CenterLoader from 'components/CenterLoader'
import Wrapper from 'components/Wrapper'

const Login = () => {

    const user = useSelector((state: any) => state.user)
    const isLoading = user.status === 'running' ? true : false
    const dispatch = useDispatch()
    return (
        <Wrapper>
            <Header as="h1">Login</Header>
            <Button onClick={() => {
                dispatch(actions.login.started({ id: '1' }))
            }} disabled={isLoading}>
                Login
            </Button>
            <CenterLoader isLoading={isLoading}/>
        </Wrapper>
    )
}

export default Login