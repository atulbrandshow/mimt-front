import React from 'react'

const about = ({ data }) => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <h1 className='text-5xl font-novaBold'>{data?.name}</h1>
        </div>
    )
}

export default about