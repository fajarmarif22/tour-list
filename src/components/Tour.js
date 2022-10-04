import React, { useState } from 'react'

function Tour({ id, image, info, price, name, rmvTour }) {
  const [read, setRead] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4> {name} </h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>
          {read ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setRead(!read)}>
            {read ? 'show less' : 'read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => rmvTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
