import { useParams } from 'react-router-dom'

export const ReviewScreen = () => {
  const { id } = useParams()
  return 'Review Screen'
}
