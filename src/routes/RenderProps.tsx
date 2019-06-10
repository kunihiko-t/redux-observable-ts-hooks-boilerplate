import React from 'react'
import { Header } from 'semantic-ui-react'
import Wrapper from '../components/Wrapper'
import GlobalNav from '../components/GlobalNav'
import MouseTracker from '../components/Mouse'

const RenderProps = () => {
    return (
        <Wrapper>
            <GlobalNav activeItem="renderProps"/>
            <Header as="h1">RenderProps</Header>
            <MouseTracker/>
        </Wrapper>
    )
}

export default RenderProps