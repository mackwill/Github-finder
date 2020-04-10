import React, { Component } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
    if(loading) {
        return <Spinner/>
    } else {

        return (
            <div style={userStlye}>
                {users.map(user =>(
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStlye = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGaps: '1rem'
}
export default Users
