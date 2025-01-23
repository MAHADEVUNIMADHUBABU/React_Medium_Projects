import React, { useEffect, useState } from 'react'
import DropDown from './DropDown'
import { HiArrowsRightLeft } from 'react-icons/hi2'

const CurrencyConverter = () => {

  let [currencies , setCurrencies] = useState([])
  let [amount , setAmount] = useState(1)

  let [fromCurrency , setFromCurrency] = useState("USD")
  let [toCurrency , setToCurrency] = useState("INR")

  let [converted , setConverted] = useState(null);
  let [converting , setConverting] = useState(false);

  let[ date , setDate] = useState("");

  let [ favourites , setFavourites] = useState(
    JSON.parse( localStorage.getItem("favourites")) || ["INR" , "EUR" ]
  )

  const handleFavourite = (currency) => {

    let updatedFavs = [...favourites]

    if( updatedFavs.includes(currency)){
      updatedFavs = updatedFavs.filter((favs) => favs !== currency)
    }
    else{
      updatedFavs.push(currency)
    }

    setFavourites(updatedFavs)
    localStorage.setItem( "favourites" , JSON.stringify(updatedFavs));
    
  }

    // Curriencies -> "https://api.frankfurter.app/currencies"

    const fetchCurrencies = async () =>{
      try{

        const res  = await fetch("https://api.frankfurter.app/currencies")
        const data = await res.json();


        setCurrencies(Object.keys(data))
      }
      catch(error){
        console.error("Error is Fetching : " , error)
      }
    }

    useEffect(() => fetchCurrencies,
    [] )

    const convertCurrency = async () =>{

      if(!amount) return;

      setConverting(true)

      try{

        const res  = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
        const data = await res.json();

        setConverted( data.rates[toCurrency] + " " + toCurrency)
        setDate(data.date)
      }
      catch(error){
        console.error("Error is Fetching : " , error)
      }
      finally{
        setConverting(false)
      }
    }

    const swap = () =>{
      setFromCurrency(toCurrency)
      setToCurrency(fromCurrency);
    }

    // latest -> "https://api.frankfurter.app/latest?amount=1&from=USD&to=INR"

  return (
    <div className='max-w-xl mx-auto my-10 p-7 bg-white rounded-lg shadow-md'>
      <h2 className='mb-5 font-semibold text-gray-700 text-2xl'>Currency Converter</h2> 

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 items-end'>
        <DropDown currencies={currencies} title="From:" 
        favourite={favourites}
        handleFavourite={handleFavourite}
        currency={fromCurrency}
        setcurrency={setFromCurrency}
        />

        <div className='flex justify-center -mb-5 sm:mb-0'>
          <button onClick={swap} className='p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300'>
            <HiArrowsRightLeft className='text-xl text-gray-700'/>
          </button>
        </div>

        <DropDown currencies={currencies} title="To:" 
        handleFavourite={handleFavourite}
        favourite={favourites}
        currency={toCurrency}
        setcurrency={setToCurrency}
        />
      </div>

      <div className='mt-4'>
        <label className='block text-sm font-medium text-gray-700'  htmlFor="amount">Amount:</label>
        <input
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
         type="number"
        className='w-full p-2 border border-gray-300 shadow-md rounded-md focus:outline-none focus:ring-2
         focus:ring-indigo-500'/>
      </div>

      <div className='flex justify-end items-end mt-6'>
        <button onClick={convertCurrency}
         className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        ${converting ? 'animate-spin' : "" }`}
        >Converter</button>
      </div>

       { converted && (<div className='mt-4 text-lg font-medium text-right text-green-600'>
        Converted Amount: <span className='underline decoration-indigo-700 decoration-2'>{converted}</span> as on : {date}
      </div> ) }

    </div>
  )
}

export default CurrencyConverter
