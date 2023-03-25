import {SpinnerDiamond} from 'spinners-react'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center pt-32'>
        <SpinnerDiamond color='#EC4899' size={'200px'}/>
    </div>
  )
}

export default Loader