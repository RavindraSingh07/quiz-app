import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import arrayShuffle from 'array-shuffle';
import Loader from './Loader'
const Quiz = () => {

    let params = useParams();
    let navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${params.id}&type=multiple`)
            .then(res => res.json())
            .then(data => {
                setSelectedCategory(data.results)
                console.log(data.results);
                setIsLoading(false)
            })
    }, [params.id])
    return (

        <>
            {isLoading && <Loader />}
            <Link to={'/'}>
                <div className='w-[80vw] pt-6 mx-auto flex justify-end' onClick={()=>navigate('/')}>
                <img src="https://img.icons8.com/material-rounded/344/home.png" className='w-8' alt="home" />
                </div>
            </Link>
            <div className='flex flex-wrap justify-center items-center gap-x-5 w-[80vw] mx-auto py-16'>
                
                {
                    selectedCategory.map((categ) => {
                        let shuffled = arrayShuffle(categ.incorrect_answers.concat(categ.correct_answer))
                        return (
                            <>
                                <div className='w-full min-h-[4rem] rounded-t-md shadow-xl cursor-pointer bg-slate-50 flex items-center'>
                                    <p className='px-4' dangerouslySetInnerHTML={{ __html: categ.question }}></p>
                                </div>
                                <hr className='h-[0.1rem] bg-slate-100' />
                                <div className='w-full bg-slate-50 grid grid-cols-2 gap-x-2 sm:gap-x-10 gap-y-3 mx-auto py-4 rounded-b-md mb-8'>
                                {
                                 shuffled.map((options)=>{    
                                        return(
                                            <>
                                            <button  onClick={(e)=>{
                                                
                                                if((categ.incorrect_answers.includes(e.target.innerHTML))){
                                                    console.log('Correct')
                                                    e.target.style.backgroundColor = 'red'
                                                    
                                                    
                                                }else{
                                                    console.log('Wrong Answer')
                                                    e.target.style.backgroundColor = 'green'
                                                    
                                                    
                                                }
                                            }} className='clkBtn grid place-items-center mx-4 bg-blue-400 rounded-lg hover:bg-blue-600 min-w-[30%] cursor-pointer shadow-md min-h-[3rem]' dangerouslySetInnerHTML={{ __html: options }}></button>
                                            
                                            </>
                                        )
                                    })
                                }
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Quiz