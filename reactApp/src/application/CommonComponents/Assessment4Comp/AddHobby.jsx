import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_HOBBY } from '../../State/ActionTypes'
import { addHobby } from '../../State/Hobby/HobbyAction'
import { hobbiesSelector } from '../../State/Hobby/HobbySelector'

export const AddHobby = () => {
  const [hobby, setHobby] = useState('')
  const dispatch = useDispatch()
  const hobbies = useSelector(hobbiesSelector)

  const clickHandler = (env) => {
    env.preventDefault()
    //add hobby
    addHobby(hobby, (hobby) => {
      if (hobby) {
        // add hobby to the store
        dispatch({ type: ADD_HOBBY, payload: hobby })
      } else {
        alert('Error while adding hobby')
      }
    })
  }

  return (
    <div>
      <h1>Add Hobby</h1>
      <input type="text" placeholder="Enter hobby" onChange={(event) => setHobby(event.target.value)} />
      <button onClick={clickHandler}>Add</button>

      <h1> Hobbies</h1>

      {hobbies.map((hobby) => (
        <div key={hobby._id}>{hobby.name}</div>
      ))}
    </div>
  )
}
