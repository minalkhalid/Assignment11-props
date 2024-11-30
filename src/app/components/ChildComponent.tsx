import React from 'react'

const ChildComponent = (props:any) => {
    console.log(props)
  return (
    <div className='flex-justify-center p-4 '>
      <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='bg-purple-400 h-auto font-sans font-bold shadow-lg shadow-orange-500 rounded-lg'>
          <h3 className='text-center text-xl md:text-2xl lg:text-3xl text-black p-4'>
            Information
          </h3>
          <div className='p-5 space-y-4'>
            <h3 className='text-sm md:text-base lg:text-lg p-2'>
              Name: <span className='font-bold text-black'>{props.name}</span>
            </h3>
            <h3 className='text-sm md:text-base lg:text-lg p-2'>
              Age: <span className='font-bold text-black'>{props.age}</span>
            </h3>
            <h3 className='text-sm md:text-base lg:text-lg p-2'>
              Fvt Color: <span className='font-bold text-black'>{props.fvtColor}</span>
            </h3>
            <h3 className='text-sm md:text-base lg:text-lg p-2'>
              Fvt Dish: <span className='font-bold text-black'>{props.fvtDish}</span>
            </h3>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default ChildComponent