import React from 'react'

const Page = ({ data }) => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <h1>{data?.name}</h1>
        </div>
    )
}

export default Page