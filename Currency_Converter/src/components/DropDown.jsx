import React from 'react'
import { HiOutlineStar, HiStar } from 'react-icons/hi2'

export default function DropDown(
    {
        currencies,
        currency,
        setcurrency,
        favourite,
        handleFavourite,
        title = ""
    } 
) 

{
    const itIsFavourite = (curr) => favourite.includes(curr)

  return (
    <div>
        <label className='block text-sm font-medium text-gray-700' htmlFor={title}>{title}</label>
        <div className='mt-1 relative'>

            <select value={currency} onChange={ (e) => setcurrency(e.target.value)} 
            className='w-full p-2 border border-gray-300 shadow-sm rounded-md
            focus:outline-none focus:ring-2 focus:ring-indigo-500'
            name="" id="">
                {favourite.map( (currency) =>{
                    return <option className='bg-gray-300' value={currency} key={currency}>
                        {currency}
                    </option>
                } )}
                <hr />
                {
                    currencies.filter( (c) => !favourite.includes(c))
                    .map( (currency) =>{
                    return <option value={currency} key={currency}>
                            {currency}
                        </option>
                    }) 
                }
            </select>

            <button onClick={() => handleFavourite(currency)} className='absolute pr-5 inset-y-0 flex right-0 items-center text-sm leading-5'>
                { itIsFavourite(currency) ? <HiStar/> : <HiOutlineStar/>}
            </button>
            
        </div>
    </div>
  )
}
