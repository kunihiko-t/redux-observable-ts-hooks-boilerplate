import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header } from 'semantic-ui-react'
import Wrapper from 'components/Wrapper'

const Home = () => {
    return (
        <Wrapper>
            <Header as="h1">Top</Header>
            <Button>
                <Link to="/login">Go to Login Page</Link>
            </Button>
        </Wrapper>
    )
}

export default Home