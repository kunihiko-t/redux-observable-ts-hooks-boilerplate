import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Top</h1>
            <Link to="/login">Login Page</Link>
        </div>
    )
}

export default Home