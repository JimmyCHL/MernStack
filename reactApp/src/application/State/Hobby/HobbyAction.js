import axiosInstance from '../../config/globalAxios'

/** Add hobby action */
export const addHobby = async (data, callback) => {
  try {
    const response = await axiosInstance.post('/hobby/api/addHobby', { name: data })
    const hobby = response.data
    callback(hobby)
  } catch (err) {
    console.log(err)
    callback()
  }
}

/** Fetch hobbies action */
export const fetchHobbies = async (callback) => {
  try {
    const response = await axiosInstance.get('/hobby/api/fetchHobbies')
    const hobbies = response.data
    callback(hobbies)
  } catch (err) {
    console.log(err)
    callback([])
  }
}
