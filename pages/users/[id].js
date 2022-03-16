import { useRouter } from 'next/router'
import React from 'react'
import fetch from 'isomorphic-fetch'
import Container from '../../components/Container'

const UserProfile = ({user}) => {
    const {query: {id}} = useRouter()
    console.log(user)
  return (
    <Container>
        <div className='col-md-6 offset-md-3'>
            <div className='card'>
                <div className='card-header text-center'>
                    <h2> {user.id} {user.name}</h2>
                </div>
                <div className='card-body'>
                    <h3>{user.phone}</h3>
                    <p>{user.email}</p>
                    <a href='user.website'>{user.website}</a>
                </div>
            </div>
        </div>
    </Container>
  )
}

UserProfile.getInitialProps = async(ctx) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${ctx.query.id}`)
    const data = await res.json()
    return {user: data}
}

export default UserProfile