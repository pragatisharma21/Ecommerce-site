import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const handleProductClick = ()=>{
        navigate('/product')
    }

  return (
    <div className='flex justify-center items-center absolute top-10 left-1/2'>
      <button className="px-2 py-1 bg-blue-500 rounded" onClick={handleProductClick} >Open Products</button>
    </div>
  )
}

export default Home;