import axios from 'axios'
import { useEffect, useState } from 'react'

export function AW3Component() {
  const [imageSrc, setImageSrc] = useState(null)
  const [file, setFile] = useState(null)

  useEffect(() => {
    // Fetch image data from backend
    console.log(`${process.env.REACT_APP_BACKEND_URL}/file/${process.env.REACT_APP_AWS_IMAGE_KEY}`)
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/file/${process.env.REACT_APP_AWS_IMAGE_KEY}`, { responseType: 'blob' }) // Request the image file
      .then((response) => {
        const reader = new FileReader()
        reader.onload = () => {
          setImageSrc(reader.result)
        }
        reader.readAsDataURL(response.data)

        // or
        // const imageObjectURL = URL.createObjectURL(response.data); // Create a URL from the blob
        // setImageSrc(imageObjectURL); // Set the image src to this URL
      })
      .catch((error) => {
        console.error('Error fetching image:', error)
      })
  }, [])

  const uploadFile = async (e) => {
    if (!file) {
      alert('Please select a file to upload')
      return
    }

    const reader = new FileReader()

    reader.onloadend = () => {
      const base64File = reader.result.split(',')[1] // Strip out the data URL prefix

      // Use axios to send the Base64 file data to the server
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/upload`, {
          fileName: file.name,
          fileData: base64File,
        })
        .then((response) => {
          console.log('File uploaded successfully:', response.data)
        })
        .catch((err) => {
          console.error('Error uploading file:', err)
        })
    }

    reader.readAsDataURL(file) // Read the file as Base64
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0] // Get the selected file
    if (selectedFile) {
      setFile(selectedFile) // Update the file state
    }
  }

  return (
    <div>
      <h1>Display Image from Backend</h1>
      {imageSrc ? <img src={imageSrc} alt="Fetched from backend" /> : <p>Loading image...</p>}
      <br />
      <h2>Deploy file</h2>
      <form>
        <input type="file" name="image" onChange={handleFileChange} />
        <button type="button" onClick={uploadFile}>
          Upload
        </button>
      </form>
    </div>
  )
}
