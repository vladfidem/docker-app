import { useEffect, useState } from 'react'

export const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(result => setData(result))
  }, [])

  return (
    <ul>
      {data.map(({ id, value }) => (
        <li key={id}>{value}</li>
      ))}
    </ul>
  )
}
