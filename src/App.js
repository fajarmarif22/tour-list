import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const rmvTour = (id) => {
    const newTours = tours.filter((tours) => tours.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
      console.log(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            Reset
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} rmvTour={rmvTour} />
    </main>
  )
}

export default App
