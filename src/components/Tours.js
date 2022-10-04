import React from 'react'
import Tour from './Tour'

function Tours({ tours, rmvTour }) {
  return (
    <section>
      <div className='title'>
        <h2>ours tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} rmvTour={rmvTour}></Tour>
        })}
      </div>
    </section>
  )
}

export default Tours
