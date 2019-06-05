import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { parse } from 'query-string'
import { push } from 'connected-react-router'
import { Dispatch } from 'redux'
import { History } from 'history'

const Home = ({ dispatch, history }: { dispatch: Dispatch, history: History }) => {
    const query = parse(history.location.search)
    const installationID = query['installation_id']
    useEffect(() => {
        //Mount
        console.log('mount')
        return () => {
            //Unmount
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

Home.propTypes = {
    dispatch: PropTypes.func.isRequired,
    github: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
}

Home.defaultProps = {}

function mapStateToProps(state) {
    return { github: state.github }
}

export default connect(mapStateToProps)(Home)