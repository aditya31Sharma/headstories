import React from 'react'
import { useGlobalContext } from './context'
import previmg from './img/prev.png'
import nextimg from './img/next.png'

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()

  return (
    <div className='btn-container'>
      <button disabled={isLoading} onClick={() => handlePage('dec')}>
        <img src={previmg} className='btn-logo'
        alt="prev"/>
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage('inc')}>
      <img src={nextimg} 
        className='btn-logo'
        alt="prev"/>
      </button>
    </div>
  )
}

export default Buttons
