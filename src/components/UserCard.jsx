import React from 'react'

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpen }) => {

  const handleDelete = () => {
    deleteUserById(user.id)
  }

  const handleUpdate =  () => {
    setUpdateInfo(user)
    handleOpen()
  }

  return (
    <article className='cards'>
      <h2 className='cards__name'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='cards__list'>
        <li className='cards__items'><span>Email: </span>{user.email}</li>
        <li className='cards__items'><span>Birthday: </span>{user.birthday}</li>
      </ul>
      <div className='cards__container-btn'>
        <button className='cards__btn' onClick={handleDelete}>Delete</button>
        <button className='cards__btn' onClick={handleUpdate}>Update</button>
      </div>
      
    </article>
  )
}

export default UserCard