import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
//import Loader from './Loader'


let Images = require('../categoryID.json')
const Category = () => {
    let navigate = useNavigate();

    return (
        <>
            {/* {isLoading && <Loader/>} */}
            <div className='w-[80vw] flex flex-wrap justify-center items-center sm:gap-x-20 sm:gap-y-8 mx-auto gap-y-3 gap-x-4'>
            { Images.map((img)=>{
                return (
                    <Link to={'/quiz/'+img.id}>
                        <div key={img.id} className='bg-slate-50 rounded-lg py-4 flex flex-col justify-center items-center w-40 cursor-pointer shadow-xl hover:ring-pink-500 hover:ring-2 hover:ring-offset-2 ring-opacity-50 ' onClick={()=>{navigate('/quiz/'+img.id)}}>
                            
                            <p className='font-normal'>{img.name}</p>
                        </div>
                    </Link>
                )
            }) }
            </div>
        </>
        
    )
}

export default Category