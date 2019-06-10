import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import actions from '../actions/github'
import RepositoryList from '../components/RepositoryList'
import Wrapper from '../components/Wrapper'
import GlobalNav from '../components/GlobalNav'
const Home = () => {
    const dispatch = useDispatch()
    const github = useSelector((state: any) => state.github)
    const isLoading = github.status === 'running' ? true : false
    const repositories = github.repositories
    useEffect(() => {
        //Mount
        console.log('mount')
        return () => {
            console.log('unmount')
        }
    }, [])
    return (
        <Wrapper>
            <GlobalNav activeItem="home"/>
            <h1>Home</h1>
            <Button
                onClick={() => {
                    dispatch(actions.fetchRepositories.started({}))
                }}
                disabled={isLoading}
            >
                Fetch repositories
            </Button>
            <RepositoryList items={repositories.items || []} total_count={repositories.total_count}
                            isLoading={isLoading}/>
        </Wrapper>
    )
}

export default Home