import React, { Component } from 'react'
import UserItem from './UserItem';

class Users extends Component {
    
    render() {
        return (
            <div style={userStlye}>
                {this.props.users.map(user =>(
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

const userStlye = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGaps: '1rem'
}
export default Users
