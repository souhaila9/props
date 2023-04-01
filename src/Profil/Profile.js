import React from 'react'

const Profile = (props) => {
  console.log(props)
  return (
    <div>
      <h1> my name is = {props.myName}</h1>
      <h2> my Bio is = {props.myBio}</h2>
      <h3> my profesion is = {props.myprofesion}</h3>
      
    </div>
  )
}

export default Profile
