import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

type NaviItem = 'home' | 'renderProps'

const GlobalNav: React.FC<{ activeItem: NaviItem }> = ({ activeItem }) => {

    const dispatch = useDispatch()
    return (
            <Menu pointing secondary>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'home'}
                    onClick={() => dispatch(push('/home'))}
                    link={true}
                />
                <Menu.Item
                    name='Render Props'
                    active={activeItem === 'renderProps'}
                    onClick={() => dispatch(push('/renderProps'))}
                    link={true}
                />
            </Menu>
    )
}

export default GlobalNav