import React from 'react'
import Router from 'next/router'

const Users = (props) => {
  return (
    <ul className='list-group'>
        {
            props.users.map(user => (
                <li className='list-group-item list-group-item-action' key={user.id} onClick={() => {
                     Router.push('/users/[id]', `/users/${user.id}`)}}>
                    <h5>{user.name }</h5>
                    <p>email: {user.email}</p>
                </li>
            ))
        }
    </ul>
  )
}

export default Users